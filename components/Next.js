import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Next = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>hi</Text>
      <Button
        title="To Do List"
        onPress={() => navigation.navigate("TodoList")}
      />
    </View>
  );
};

export default Next;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
