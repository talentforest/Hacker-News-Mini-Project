import styled from "styled-components";
import { SortBtn } from "../components/SortBtn";

const Wrapper = styled.div`
  padding-top: 20px;
`;
const Articles = styled.section`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 2740px;
  padding-top: 20px;
  margin: 0 auto;
`;
const Article = styled.div`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  width: 390px;
  height: 201px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  h4 {
    font-weight: 500;
    line-height: 24px;
    padding: 12px 20px 4px;
    height: 64px;
    /* border: 1px solid red; */
  }
  p {
    height: 70px;
    padding: 6px 20px 10px;
    font-size: 14px;
    line-height: 18px;
    color: #727272;
    /* border: 1px solid red; */
  }
`;
const Time = styled.span`
  border-bottom: 1px solid #e2e2e2;
  height: 27px;
  display: block;
  text-align: end;
  padding: 2px 20px 13px 0;
  font-size: 12px;
  color: #949494;
  font-weight: 400;
`;
const Info = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 12px;
  padding: 12px 20px;
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
  font-weight: 400;
  span:first-child {
    margin-right: 6px;
  }
`;
const Comments = styled.div`
  display: flex;
  align-items: center;
  color: #ed702d;
`;
export const AskArticles = () => {
  return (
    <Wrapper>
      <SortBtn />
      <Articles>
        <Article>
          <h4>
            Ask HN: Why hasn't music been disrupted yet in the same way movies
            have been?
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsumasass
            dfsadf asdfasd sdf asd 163
          </p>
          <Time>2 hours ago</Time>
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
