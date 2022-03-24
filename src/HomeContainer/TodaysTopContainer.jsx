import { useEffect, useState } from "react";
import { getTopStoryIds } from "../util/hnApi";
import TodaysTop from "../HomeComponents/TodaysTop";
import styled from "styled-components";
import TitleClock from "../components/common/TitleClock";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 650px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Container = styled.ul`
  background-color: ${(props) => props.theme.containerColor};
  height: 490px;
  margin: 20px 20px 32px 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

const TodaysTopContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
  }, []);

  return (
    <Wrapper>
      <TitleClock title="Today's Top" />
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <Container>
            {storyIds?.slice(0, 5).map((storyId, index) => (
              <TodaysTop key={storyId} storyId={storyId} index={index} />
            ))}
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            {storyIds.slice(5, 10).map((storyId, index) => (
              <TodaysTop key={storyId} storyId={storyId} index={index + 5} />
            ))}
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            {storyIds.slice(10, 15).map((storyId, index) => (
              <TodaysTop key={storyId} storyId={storyId} index={index + 10} />
            ))}
          </Container>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default TodaysTopContainer;
