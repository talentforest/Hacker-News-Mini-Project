import { useEffect, useState } from "react";
import styled from "styled-components";
import { SortBtn } from "../components/SortBtn";
import { AskPostBox } from "../ArticleComponents/AskPostBox";
import { getAskStoryIds } from "../api/hnApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Wrapper = styled.div`
  padding-top: 20px;
`;
const Posts = styled.section`
  display: flex;
  flex-direction: column;
  width: 390px;
  padding-top: 20px;
  margin: 0 auto 150px;
`;

export const AskPostContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getAskStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <SortBtn />
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={true}
        pagination={{ type: "fraction" }}
      >
        <SwiperSlide>
          <Posts>
            {storyIds.slice(0, 20).map((storyId, index) => (
              <AskPostBox key={storyId} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(20, 40).map((storyId, index) => (
              <AskPostBox key={storyId} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(40, 60).map((storyId, index) => (
              <AskPostBox key={storyId} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
