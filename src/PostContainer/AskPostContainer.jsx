import { useEffect, useState } from "react";
import { getAskStoryIds } from "../util/hnApi";
import styled from "styled-components";
import SortBtn from "../components/common/SortBtn";
import AskPostBox from "../PostComponents/AskPostBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const AskPostContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getAskStoryIds(setStoryIds);
    return () => setStoryIds([]);
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
            {storyIds.slice(0, 20).map((storyId) => (
              <AskPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(20, 40).map((storyId) => (
              <AskPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(40, 60).map((storyId) => (
              <AskPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 25px;
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;
const Posts = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 158px;
`;

