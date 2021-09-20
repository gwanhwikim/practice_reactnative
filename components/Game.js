import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Modal from "react-native-modal";

const fourWords = [
  { id: 1, word: "사자성어", mean: "사자성어 테스팅" },
  {
    id: 2,
    word: "시시비비",
    mean: "옳은 것은 옳고 그른 것은 그르다고 공정하게 판단함.",
  },
  {
    id: 3,
    word: "새옹지마",
    mean: "인생의 길흉화복은 변화가 많아 예측하기 어렵다는 말.",
  },
  { id: 4, word: "이심전심", mean: "마음과 마음으로 서로 뜻이 통함. 심심상인" },
  {
    id: 5,
    word: "혼연일체",
    mean: "생각, 행동, 의지 따위가 완전히 하나가 됨.",
  },
  {
    id: 6,
    word: "일심동체",
    mean: " 한 마음 한 몸이 되어 뭉치거나 의를 같이 한다는 뜻",
  },
  { id: 7, word: "유일무이", mean: "오직 하나뿐이고 둘도 없음" },
  { id: 8, word: "이구동성", mean: "입은 다르나 목소리는 같다라는 뜻" },
  { id: 9, word: "유비무환", mean: "미리 준비해 두면 근심 될 것이 없음." },
  { id: 10, word: "일망타진", mean: "어떤 무리를 한꺼번에 모조리 잡음" },
];

const Game = ({ navigation }) => {
  const [choiceWord, setChoiceWord] = useState();
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ yesorno: "", mean: "" });

  useEffect(() => {
    var a = parseInt(Math.random() * fourWords.length);
    setChoiceWord(fourWords[a]);
    const qes = fourWords[a].word.split("");
    setQuestion(qes[0] + qes[1]);
    console.log(choiceWord);
  }, [choiceWord]);

  const grading = () => {
    if (choiceWord.word === question + answer) {
      setModalContent({ yesorno: "정답입니다.", mean: choiceWord.mean });
      setModalVisible(true);
    } else {
      setModalContent({ yesorno: "오답입니다.", mean: choiceWord.mean });
      setModalVisible(true);
    }
  };

  const modalClose = () => {
    setChoiceWord("");
    setAnswer("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>문제 : {question}</Text>
      <TextInput
        placeholder="정답"
        onChangeText={(e) => setAnswer(e)}
        onSubmitEditing={grading}
        defaultValue={answer}
      ></TextInput>
      <Button title="채점" onPress={grading}></Button>
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ backgroundColor: "white", width: 250, height: 300 }}>
          <Text>{modalContent.yesorno}</Text>
          <Text>{modalContent.mean}</Text>
          <Button title="닫기" onPress={modalClose}></Button>
        </View>
      </Modal>
      <Button
        title="SearchSummoner"
        onPress={() => navigation.navigate("SearchSummoner")}
      />
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
