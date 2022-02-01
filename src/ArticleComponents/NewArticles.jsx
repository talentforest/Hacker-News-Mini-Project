import styled from "styled-components";
import { SortListBtn } from "../components/SortBtn";

const Wrapper = styled.div`
  padding-top: 20px;
`;
const Articles = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 2740px;
  padding-top: 20px;
  margin: 0 auto;
`;
const Article = styled.div`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 148px;
  border-radius: 8px;
  background-color: #fff;
  padding: 14px 12px 0;
  h4 {
    display: flex;
    align-items: center;
    font-weight: 600;
    line-height: 24px;
    height: 64px;
  }
`;
const Tag = styled.div`
  width: 63px;
  height: 20px;
  padding: 5px 6px;
  background-color: #efefef;
  font-size: 10px;
  color: #ed702d;
  border-radius: 20px;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 36px;
  font-size: 12px;
  padding: 22px 0 14px;
  color: #949494;
  img {
    width: 16px;
    height: 16px;
    margin-right: 3.3px;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  color: #111;
`;
const UserInfo = styled.div`
  margin-left: 6px;
  display: flex;
  color: #949494;
  span:first-child {
    margin-right: 6px;
  }
`;
const Comments = styled.div`
  display: flex;
  align-items: center;
  color: #ed702d;
`;
export const NewArticles = () => {
  return (
    <Wrapper>
      <SortListBtn />
      <Articles>
        <Article>
          <Tag>github.com</Tag>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
          <Info>
            <User>
              <img src="img/user.png" alt="userimg" />
              <span>Kristin Watson</span>
              <UserInfo>
                <span>194 points</span>
                <span>2 hours</span>
              </UserInfo>
            </User>
            <Comments>
              <img src="img/comment.png" alt="comments" />
              <span>234</span>
            </Comments>
          </Info>
        </Article>
      </Articles>
    </Wrapper>
  );
};
