import React from "react";
import styled from "styled-components";

const ShowWrapper = styled.div`
  width: 200px;
  height: 224px;
  background-color: #eaf4f8;
  padding: 16px 12px 0 12px;
`;
const Tag = styled.div`
  width: 63px;
  height: 20px;
  padding: 4px 6px;
  background-color: #f49664;
  border: 1px solid orange;
  font-size: 10px;
  color: #f5f5f5;
  border-radius: 20px;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  height: 106px;
  padding-top: 6px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  font-size: 12px;
  color: #727272;
  span {
    display: block;
    margin-right: 4px;
    padding-top: 6px;
  }
  img:first-child {
    width: 14px;
    height: 14px;
  }
  img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
`;
const User_Comments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  font-size: 12px;
  border-top: 0.1px solid #e1e1e1;
  color: #727272;
  img {
    margin-right: 4px;
  }
  span {
    padding-top: 3px;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 14px;
  }
`;
const Comments = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 16px;
  }
  span {
    color: #f49664;
  }
`;
export const TShow = () => {
  return (
    <ShowWrapper>
      <Tag>github.com</Tag>
      <Title>
        Show HN: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libersdg3gasegs
      </Title>
      <Info>
        <img src="img/point.png" alt="point" />
        <span>100</span>
        <img src="img/clock2.png" alt="clock" />
        <span>2 minutes ago</span>
      </Info>
      <User_Comments>
        <User>
          <img src="img/user.png" alt="userimage" />
          <span>DaniDaniel3235</span>
        </User>
        <Comments>
          <img src="img/comment.png" alt="comment" />
          <span>40</span>
        </Comments>
      </User_Comments>
    </ShowWrapper>
  );
};
