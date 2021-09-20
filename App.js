import { StyleSheet } from "react-native";
import React from "react";
import Next from "./components/Next";
import TodoList from "./components/TodoList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Game from "./components/Game";
import Summoner from "./components/Summoner";
import SearchSummoner from "./components/SearchSummoner";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Next">
        <Stack.Screen name="Next" component={Next} />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Summoner" component={Summoner} />
        <Stack.Screen name="SearchSummoner" component={SearchSummoner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
