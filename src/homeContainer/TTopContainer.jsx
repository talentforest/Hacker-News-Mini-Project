import { useEffect, useState } from "react";
import { getTopStoryIds } from "../api/hnApi";
import { TTop } from "../homeComponents/TTop";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Wrapper = styled.div`
  width: 390px;
  height: 582px;
  margin-bottom: 12px;
  background-color: #fff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  position: relative;
`;
const Container = styled.div`
  background-color: #fff;
  width: 350px;
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
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        <SwiperSlide>
          <Container>
            {storyIds.slice(0, 5).map((storyId, index) => (
              <TTop key={storyId} storyId={storyId} storyIds={storyIds} />
            ))}
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            {storyIds.slice(5, 10).map((storyId, index) => (
              <TTop key={storyId} storyId={storyId} storyIds={storyIds} />
            ))}
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            {storyIds.slice(10, 15).map((storyId, index) => (
              <TTop key={storyId} storyId={storyId} storyIds={storyIds} />
            ))}
          </Container>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
