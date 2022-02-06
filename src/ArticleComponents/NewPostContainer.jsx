import { useEffect, useState } from "react";
import styled from "styled-components";
import { SortListBtn } from "../components/SortBtn";
import { NewPostBox } from "./NewPostBox";
import { getNewStoryIds } from "../api/hnApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Wrapper = styled.div`
  padding-top: 20px;
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;
const Posts = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding-top: 20px;
  margin: 0 auto 150px;
`;

export const NewPostContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds().then((data) => setStoryIds(data));
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
            {storyIds.slice(0, 20).map((storyId, index) => (
              <NewPostBox key={storyId} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(20, 40).map((storyId, index) => (
              <NewPostBox key={storyId} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(40, 60).map((storyId, index) => (
              <NewPostBox key={storyId} storyId={storyId} storyIds={storyIds} />
            ))}
          </Posts>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
