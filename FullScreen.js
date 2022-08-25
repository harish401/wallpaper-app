import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
} from "react-native";

const Dev_Height = Dimensions.get("screen").height;

import { createClient } from "pexels";
const client = createClient(
  "563492ad6f91700001000001073a6de5088c4ea9bc7bb727b2bec712"
);

export default class FullScreen extends React.Component {
  FindImages = (query, page_no) => {
    this.setState({ refreshing: true });
    client.photos
      .search({ query, per_page: 20, page: page_no })
      .then((photos) => {
        this.setState({ carouselItems: photos });
        this.setState({ carouselItems: this.state.carouselItems["photos"] });
        this.setState({ refreshing: false });
      });
  };

  constructor(props) {
    super(props);

    this.state = {
      carouselItems: [],
      query: this.props.route.params.query,
      refreshing: false,
      scroll: true,
    };
  }

  componentDidMount() {
    this.FindImages(this.state.query, 1);
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, padding: 10, paddingTop: StatusBar.currentHeight }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FlatList
            columnWrapperStyle={{ justifyContent: "space-between" }}
            scrollEnabled={this.state.scroll}
            data={this.state.carouselItems}
            numColumns={2}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.FindImages(this.state.query, 2)}
                title="Refreshing"
                titleColor="#FFF"
                colors={["gray", "orange"]}
              />
            }
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    height: Dev_Height - 0.7 * Dev_Height,
                    width: "48%",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("ImageDisplay", {
                      id: item.id,
                    })
                  }
                >
                  <Image
                    source={{ uri: item["src"]["large"] }}
                    style={{ height: "95%", width: "95%", borderRadius: 15 }}
                  />
                </TouchableOpacity>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 20 }} />;
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
