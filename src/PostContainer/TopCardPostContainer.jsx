import styled from "styled-components";
import { useEffect, useState } from "react";
import { getTopStoryIds } from "../util/hnApi";
import { TopPostBox } from "../PostComponents/TopPostBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export const TopCardPostContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
  }, []);

  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={true}
        pagination={{ type: "fraction" }}
      >
        <SwiperSlide>
          <Posts>
            {storyIds.slice(0, 20).map((storyId) => (
              <TopPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(20, 40).map((storyId) => (
              <TopPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(40, 60).map((storyId) => (
              <TopPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(60, 80).map((storyId) => (
              <TopPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(80, 100).map((storyId) => (
              <TopPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  width: 100%;
`;
const Posts = styled.section`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 158px;
`;
