import React, { useEffect } from "react";
import { View } from "react-native";
import axios from "axios";
import { useState } from "react/cjs/react.development";

const Summoner = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/ip6Wv33225fwqfiDHbpBLuK8bJCdBG4Mgn8x-_XQum6V-5E?api_key=RGAPI-0ae41f2d-1d3d-40ad-a096-0e94a22a249d"
      );
      setData(response.data);
    };
    fetchData();
    console.log(data[1]);
  }, []);
  return <View></View>;
};

export default Summoner;
