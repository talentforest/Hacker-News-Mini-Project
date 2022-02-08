import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import axios from "axios";
import { userSelectFields } from "../util/selectFields";
import { mapTime } from "../time/mapTime";

export const TUserInfo = memo(function Story({ userName }) {
  const [topUserData, setTopUserData] = useState([]);

  const getUserInfo = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/user/${userName}.json`)
      .then(({ data }) => data && userSelectFields(data));
    // console.log(result);
    return result;
  };

  useEffect(() => {
    getUserInfo().then((data) => data && setTopUserData(data));
  }, []);

  return <div>{1}</div>;
});
