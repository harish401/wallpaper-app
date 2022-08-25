import React, { useState, useRef } from "react";
import { WebView } from "react-native-webview";
import {
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
function Browser({ navigation }) {
  const [visible, setVisible] = useState(false);
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;

  return (
    <>
      <WebView
        source={{ uri: "https://www.pinterest.com" }}
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
      />
      {visible && (
        <ActivityIndicator
          color="red"
          size="large"
          style={{
            position: "absolute",
            top: height / 2,
            left: width / 2.1,
          }}
        />
      )}
    </>
  );
}
export default Browser;
