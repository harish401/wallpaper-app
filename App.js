import * as React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import FullCatogeryScreen from "./FullScreen";
import ImageDisplay from "./ImageDisplay";
import Browser from "./Browser";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "vertical",
          animationEnabled: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="FullCatogery"
          component={FullCatogeryScreen}
          options={{
            headerShown: true,
            headerTitle: "Top Picks!",
            headerTitleStyle: {
              color: "white",
              fontSize: 25,
            },
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="ImageDisplay"
          component={ImageDisplay}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Browser"
          component={Browser}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
