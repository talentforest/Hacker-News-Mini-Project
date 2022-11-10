import { useEffect, useState } from "react";
import {
  getAskStoryIds,
  getJobStoryIds,
  getNewStoryIds,
  getShowStoryIds,
  getTopStoryIds,
} from "util/hnApi";
import styled from "styled-components";
import TodaysNew from "components/template/TodaysNew";
import TodaysAsk from "components/template/TodaysAsk";
import TodaysShow from "components/template/TodaysShow";
import TodaysTop from "components/template/TodaysTop";
import TodaysUser from "components/template/TodaysUser";
import TodaysJob from "components/template/TodaysJob";

const Home = () => {
  const [topStoryIds, setTopStoryIds] = useState([]);
  const [newStoryIds, setNewStoryIds] = useState([]);
  const [userStoryIds, setUserStoryIds] = useState([]);
  const [showStoryIds, setShowStoryIds] = useState([]);
  const [jobStoryIds, setJobStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setTopStoryIds);
    getNewStoryIds(setNewStoryIds);
    getAskStoryIds(setUserStoryIds);
    getShowStoryIds(setShowStoryIds);
    getJobStoryIds(setJobStoryIds);
    return () => {
      setTopStoryIds([]);
      setNewStoryIds([]);
      setUserStoryIds([]);
      setShowStoryIds([]);
      setJobStoryIds([]);
    };
  }, []);

  return (
    topStoryIds &&
    newStoryIds &&
    userStoryIds &&
    showStoryIds &&
    jobStoryIds && (
      <>
        <Banner src={require("assets/home_banner.png")} alt="home banner" />
        <Container>
          <TodaysTop topStoryIds={topStoryIds} />
          <TodaysNew newStoryIds={newStoryIds} />
          <TodaysAsk userStoryIds={userStoryIds} />
          <TodaysUser topStoryIds={topStoryIds} />
          <TodaysShow showStoryIds={showStoryIds} />
          <TodaysJob jobStoryIds={jobStoryIds} />
        </Container>
      </>
    )
  );
};

export const Banner = styled.img`
  width: 100%;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.background.gray};
  margin-top: -3px;
  > section {
    background-color: ${(props) => props.theme.background.default};
    margin-bottom: 10px;
    padding: 30px 20px;
  }
`;

export default Home;
