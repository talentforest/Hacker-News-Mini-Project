import styled from "styled-components";
import FaqBox from 'components/About/FaqBox';
import AboutBox from 'components/About/AboutBox';

export default function About() {
  return (
    <Wrapper>
      <div>
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
      </div>
      <AboutBox
        title={"Top"}
        text={"Top is a service that ranks all articles on Hacker News through Hacker News' own algorithms."}
      />
      <AboutBox
        title={"New"}
        text={"New is a service that allows you to see all the new articles in chronological order."}
      />
      <AboutBox
        title={"Show"}
        text={"Show HN is for something you've made that other people can play with."}
      />
      <AboutBox
        title={"Ask"}
        text={"Ask HN can ask and receive any questions."}
      />
      <AboutBox
        title={"Job"}
        text={"In jobs, you can check real-time job openings posted by companies."}
      />
      <div>
        <span>FAQ</span>
        <FaqBox title={"Can I write here?"} />
        <FaqBox title={"Are there rules about submissions and comments?"} />
        <FaqBox title={"How are stories ranked?"} />
        <FaqBox title={"How is a user's karma calculated?"} />
        <FaqBox title={"Why don't I see down arrows?"} />
        <FaqBox title={"What kind of formatting can you use in comments?"} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  padding: 29px 20px;
  > div {
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
    > div {
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
    }
  }
`;
