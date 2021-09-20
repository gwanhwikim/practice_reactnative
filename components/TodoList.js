import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Modal from "react-native-modal";

const TodoList = ({ navigation }) => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const renderTodoList = todoList.map((v) => {
    return (
      <View style={{ flexDirection: "row" }} key={v.id}>
        <Text>{v.do}</Text>
        <Button onPress={() => deleteTodo(v.id)} title="x"></Button>
      </View>
    );
  });

  const deleteTodo = (id) => {
    setTodoList(
      todoList.filter((v) => {
        return v.id !== id;
      })
    );
  };

  const addTodo = () => {
    setTodoList([
      ...todoList,
      { do: todo, id: new Date().getUTCMilliseconds() },
    ]);
    setTodo("");
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="null">
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="할일을 입력해주세요"
          onChangeText={(e) => setTodo(e)}
          onSubmitEditing={addTodo}
          defaultValue={todo}
        ></TextInput>
        <Button
          style={styles.button}
          onPress={addTodo}
          title="추가"
          color="red"
        ></Button>
      </View>
      <KeyboardAvoidingView>
        <Button title="Modal Open" onPress={openModal} />
      </KeyboardAvoidingView>
      <Modal
        //isVisible Props에 State 값을 물려주어 On/off control
        isVisible={modalVisible}
        //아이폰에서 모달창 동작시 깜박임이 있었는데, useNativeDriver Props를 True로 주니 해결되었다.
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ backgroundColor: "white", width: 300, height: 300 }}>
          <Text>hi</Text>
          <View>{renderTodoList}</View>
        </View>
        <Button title="modal close" onPress={closeModal}></Button>
      </Modal>
      {/* <StatusBar style="auto" /> */}
      <Button title="Game" onPress={() => navigation.navigate("Game")} />
    </KeyboardAvoidingView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  searchContainer: {
    flex: 0.1,
    flexDirection: "row",
    height: 100,
    marginTop: 30,
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
    height: 50,
    marginRight: 10,
  },
  button: {
    width: 50,
    height: 50,
  },
});
