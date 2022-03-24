import styled from "styled-components";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Wrapper>
        <DescBox>
          <span>About</span>
          <p>
            This is a simple Hacker News clone, built with SvelteKit, an
            application framework for Svelte. <br /> <br />
            Svelte is a new kind of framework, one that compiles your component
            templates into fast, compact JavaScript — either client-side or
            server-side. You can read more about the design and philosophy in
            the introductory blog post. <br /> <br />
            We're using hnpwa-api as a backend. The app is hosted on Vercel.
          </p>
        </DescBox>
        <DescBox>
          <Link to="/top">
            <span>
              Top <img src="/assets/arrow_right_orange.png" alt="arrow" />
            </span>
          </Link>
          <p>
            Top is a service that ranks all articles on Hacker News through
            Hacker News' own algorithms.
          </p>
        </DescBox>
        <DescBox>
          <Link to="/new">
            <span>
              New{" "}
              <img
                src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_right_orange.png"
                alt="arrow"
              />
            </span>
          </Link>
          <p>
            New is a service that allows you to see all the new articles in
            chronological order.
          </p>
        </DescBox>
        <DescBox>
          <Link to="/show">
            <span>
              Show{" "}
              <img
                src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_right_orange.png"
                alt="arrow"
              />
            </span>
          </Link>
          <p>
            Show HN is for something you've made that other people can play
            with.{" "}
          </p>
        </DescBox>
        <DescBox>
          <Link to="/ask">
            <span>
              Ask{" "}
              <img
                src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_right_orange.png"
                alt="arrow"
              />
            </span>
          </Link>
          <p>Ask HN can ask and receive any questions.</p>
        </DescBox>
        <DescBox>
          <Link to="/job">
            <span>
              Job{" "}
              <img
                src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_right_orange.png"
                alt="arrow"
              />
            </span>
          </Link>
          <p>
            In jobs, you can check real-time job openings posted by companies.
          </p>
        </DescBox>
        <DescBox>
          <span>FAQ </span>
          <Question>
            Can I write here?
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_down_darkgray.png"
              alt="arrow"
            />
          </Question>
          <Question>
            Are there rules about submissions and comments?
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_down_darkgray.png"
              alt="arrow"
            />
          </Question>
          <Question>
            How are stories ranked?
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_down_darkgray.png"
              alt="arrow"
            />
          </Question>
          <Question>
            How is a user's karma calculated?
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_down_darkgray.png"
              alt="arrow"
            />
          </Question>
          <Question>
            Why don't I see down arrows?
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_down_darkgray.png"
              alt="arrow"
            />
          </Question>
          <Question>
            What kind of formatting can you use in comments?
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_down_darkgray.png"
              alt="arrow"
            />
          </Question>
        </DescBox>
      </Wrapper>
    </>
  );
}


const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  padding: 29px 20px;
`;
const DescBox = styled.div`
  background-color: ${(props) => props.theme.containerColor};
  padding: 27px 20px;
  margin-bottom: 28px;
  border-radius: 6px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05), 0px 6px 10px rgba(0, 0, 0, 0.05);
  span {
    display: inline-block;
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: ${(props) => props.theme.textGrayColor};
    margin-bottom: 23px;
    cursor: pointer;
    img {
      width: 7.41px;
      height: 12px;
      margin-bottom: 1px;
      margin-left: 2px;
    }
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${(props) => props.theme.textColor};
  }
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #999;
  padding: 14px 0;
  color: ${(props) => props.theme.textColor};
  img {
    width: 12px;
    height: 7.41px;
    margin-top: 5px;
  }
`;

