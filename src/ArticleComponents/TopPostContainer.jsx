import styled from "styled-components";
import { SortListBtn } from "../components/SortBtn";
import { useEffect, useState } from "react";
import { getTopStoryIds } from "../api/hnApi";
import { TopPostBox } from "./TopPostBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

const Wrapper = styled.div``;
const Posts = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding-top: 20px;
  margin: 0 auto 150px;
`;

export const PostContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <SortListBtn />
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={true}
        pagination={{ type: "fraction" }}
      >
        <SwiperSlide>
          <Posts>
            {storyIds.slice(0, 20).map((storyId, i) => (
              <TopPostBox key={i} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(20, 40).map((storyId, i) => (
              <TopPostBox key={i} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(40, 60).map((storyId, i) => (
              <TopPostBox key={i} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(60, 80).map((storyId, i) => (
              <TopPostBox key={i} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(80, 100).map((storyId, i) => (
              <TopPostBox key={i} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
