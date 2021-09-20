import React, { useState } from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const SearchSummoner = () => {
  const [summoner, setSummoner] = useState("");
  const [summonerId, setSummonerId] = useState("");
  //   var a = decodeURIComponent("hide on bush");
  const submitSummoner = async () => {};
  return (
    <View>
      <TextInput
        placeholder="소환사 검색"
        onChangeText={(e) => setSummoner(e)}
        // onSubmitEditing={}
        defaultValue={summoner}
      ></TextInput>
      <Button title="검색" onPress={submitSummoner}></Button>
    </View>
  );
};

export default SearchSummoner;
