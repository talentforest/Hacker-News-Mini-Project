import { useEffect, useState } from "react";
import {
  getAskStoryIds,
  getJobStoryIds,
  getNewStoryIds,
  getShowStoryIds,
  getTopStoryIds,
} from "util/hnApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import TodaysNew from "components/home/TodaysNew";
import TitleReloadBtn from "components/home/TitleReloadBtn";
import TodaysAsk from "components/home/TodaysAsk";
import TodaysShow from "components/home/TodaysShow";
import TodaysJob from "components/home/TodaysJob";
import Title from "components/home/Title";
import TitleClock from "components/home/TitleClock";
import TodaysTop from "components/home/TodaysTop";
import styled from "styled-components";
import TodaysUser from "components/home/TodaysUser";

const Home = () => {
  const [topStoryIds, setTopStoryIds] = useState([]);
  const [newStoryIds, setNewStoryIds] = useState([]);
  const [userStoryIds, setUserStoryIds] = useState([]);
  const [showStoryIds, setShowStoryIds] = useState([]);
  const [jobStoryIds, setJobStoryIds] = useState([]);
  const [randomNum, setRandomNum] = useState({ new: 0, ask: 0, show: 0 });

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

  const reloadData = (length, title) => {
    const generateRandomNum = Math.floor(Math.random() * length - 5);
    if (title === "new")
      return setRandomNum({
        ...randomNum,
        new: generateRandomNum,
      });
    if (title === "ask")
      return setRandomNum({
        ...randomNum,
        ask: generateRandomNum,
      });
    if (title === "show")
      return setRandomNum({
        ...randomNum,
        show: generateRandomNum,
      });
  };

  return (
    topStoryIds &&
    newStoryIds &&
    userStoryIds &&
    showStoryIds &&
    jobStoryIds && (
      <>
        <Banner src={require("assets/home_banner.png")} alt="banner" />
        <Container>
          <section>
            <TitleClock title="Today's Top" />
            <SwiperList pagination={true} modules={[Pagination]}>
              <SwiperSlide>
                <ListBox>
                  {topStoryIds?.slice(0, 5).map((storyId, index) => (
                    <TodaysTop key={storyId} storyId={storyId} index={index} />
                  ))}
                </ListBox>
              </SwiperSlide>
              <SwiperSlide>
                <ListBox>
                  {topStoryIds?.slice(5, 10).map((storyId, index) => (
                    <TodaysTop
                      key={storyId}
                      storyId={storyId}
                      index={index + 5}
                    />
                  ))}
                </ListBox>
              </SwiperSlide>
              <SwiperSlide>
                <ListBox>
                  {topStoryIds?.slice(10, 15).map((storyId, index) => (
                    <TodaysTop
                      key={storyId}
                      storyId={storyId}
                      index={index + 10}
                    />
                  ))}
                </ListBox>
              </SwiperSlide>
            </SwiperList>
          </section>
          <section>
            <TitleReloadBtn
              title="Today's New"
              reloadData={() => reloadData(newStoryIds.length, "new")}
            />
            <ListBox>
              {newStoryIds
                .slice(randomNum.new, randomNum.new + 5)
                .map((storyId) => (
                  <TodaysNew key={storyId} storyId={storyId} />
                ))}
            </ListBox>
          </section>
          <section>
            <TitleReloadBtn
              title="Today's Ask"
              reloadData={() => reloadData(userStoryIds.length, "ask")}
            />
            <List>
              {userStoryIds
                .slice(randomNum.ask, randomNum.ask + 5)
                .map((storyId) => (
                  <TodaysAsk key={storyId} storyId={storyId} />
                ))}
            </List>
          </section>
          <section>
            <Title title="Today's User" />
            <SlideBox>
              {topStoryIds.slice(0, 5).map((storyId, index) => (
                <TodaysUser key={storyId} storyId={storyId} index={index} />
              ))}
            </SlideBox>
          </section>
          <section>
            <TitleReloadBtn
              title="Today's Show"
              reloadData={() => reloadData(showStoryIds.length, "show")}
            />
            <SlideBox>
              {showStoryIds
                .slice(randomNum.show, randomNum.show + 5)
                .map((storyId) => (
                  <TodaysShow key={storyId} storyId={storyId} />
                ))}
            </SlideBox>
          </section>
          <section>
            <Title title="Today's Job" />
            <SlideBox>
              {jobStoryIds.slice(0, 10).map((storyId) => (
                <TodaysJob key={storyId} storyId={storyId} />
              ))}
            </SlideBox>
          </section>
        </Container>
      </>
    )
  );
};

export const Banner = styled.img`
  width: 100%;
  height: 230px;
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

const SwiperList = styled(Swiper)`
  padding-bottom: 20px;
  .swiper-slide {
    padding: 5px;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background-color: ${(props) => props.theme.text.gray};
  }
  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.text.orange};
    width: 8px;
    height: 8px;
  }
`;

const List = styled.ul`
  margin-top: 15px;
`;

const ListBox = styled(List)`
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.container.default};
  border-radius: 8px;
  min-height: 500px;
`;

const SlideBox = styled.div`
  display: flex;
  overflow: scroll;
  background-color: ${(props) => props.theme.background.default};
  padding: 5px;
  margin: 10px -5px -5px;
  min-height: 224px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Home;
