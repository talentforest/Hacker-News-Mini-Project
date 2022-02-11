import { useEffect, useState } from "react";
import { getTopStoryIds } from "../util/hnApi";
import { TTop } from "../HomeComponents/TTop";
import styled from "styled-components";
import { ClockTitle } from "../CommonComponents/TodayTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 390px;
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

export const TTopContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <ClockTitle title="Today's Top" />
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        <SwiperSlide>
          <Container>
            {storyIds?.slice(0, 5).map((storyId, index) => (
              <TTop key={storyId} storyId={storyId} index={index} />
            ))}
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            {storyIds.slice(5, 10).map((storyId, index) => (
              <TTop key={storyId} storyId={storyId} index={index + 5} />
            ))}
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            {storyIds.slice(10, 15).map((storyId, index) => (
              <TTop key={storyId} storyId={storyId} index={index + 10} />
            ))}
          </Container>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
