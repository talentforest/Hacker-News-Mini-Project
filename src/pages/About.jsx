import { Link } from "react-router-dom";
import { ArrowForwardIos, KeyboardArrowDown } from "@material-ui/icons";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <Box>
        <span>About</span>
        <p>
          This is a simple Hacker News clone, built with SvelteKit, an
          application framework for Svelte. <br /> <br />
          Svelte is a new kind of framework, one that compiles your component
          templates into fast, compact JavaScript — either client-side or
          server-side. You can read more about the design and philosophy in the
          introductory blog post. <br /> <br />
          We're using hnpwa-api as a backend. The app is hosted on Vercel.
        </p>
      </Box>
      <Box>
        <Link to={`/top`}>
          Top <ArrowForwardIos />
        </Link>
        <p>
          Top is a service that ranks all articles on Hacker News through Hacker
          News' own algorithms.
        </p>
      </Box>
      <Box>
        <Link to={`/new`}>
          New <ArrowForwardIos />
        </Link>
        <p>
          New is a service that allows you to see all the new articles in
          chronological order.
        </p>
      </Box>
      <Box>
        <Link to={`/show`}>
          Show <ArrowForwardIos />
        </Link>
        <p>
          Show HN is for something you've made that other people can play with.
        </p>
      </Box>
      <Box>
        <Link to={`/ask`}>
          Ask <ArrowForwardIos />
        </Link>
        <p>Ask HN can ask and receive any questions.</p>
      </Box>
      <Box>
        <Link to={`/job`}>
          Job <ArrowForwardIos />
        </Link>
        <p>
          In jobs, you can check real-time job openings posted by companies.
        </p>
      </Box>
      <Box as="ul" $list>
        <span>FAQ</span>
        <FAQList>
          Can I write here?
          <KeyboardArrowDown />
        </FAQList>
        <FAQList>
          Are there rules about submissions and comments?
          <KeyboardArrowDown />
        </FAQList>
        <FAQList>
          How are stories ranked?
          <KeyboardArrowDown />
        </FAQList>
        <FAQList>
          How is a user's karma calculated?
          <KeyboardArrowDown />
        </FAQList>
        <FAQList>
          Why don't I see down arrows?
          <KeyboardArrowDown />
        </FAQList>
        <FAQList>
          What kind of formatting can you use in comments?
          <KeyboardArrowDown />
        </FAQList>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.background.default};
  padding: 29px 20px;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.container.default};
  padding: 27px 20px;
  margin-bottom: 28px;
  border-radius: 6px;
  box-shadow: ${(props) => props.theme.boxShadow};
  a,
  span {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: ${(props) => props.theme.text.default};
    margin-bottom: 23px;
    svg {
      width: 16px;
      height: 16px;
      margin-left: 4px;
      fill: ${(props) => props.theme.text.orange};
    }
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${(props) => props.theme.text.default};
  }
`;

const FAQList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  color: ${(props) => props.theme.text.default};
  border-bottom: 1px solid ${(props) => props.theme.border.lightGray};
  &:nth-child(2) {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export default About;
