import { useEffect, useState } from "react";
import { getTopStoryIds } from "../api/hnApi";
import { TTop } from "../components/TTop";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const Container = styled.div`
  width: 350px;
  height: 490px;
  margin: 20px auto 72px;
  background-color: #fff;
  /* overflow: hidden; */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export const TTopContainer = () => {
  // 글 목록값 상태관리
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds().then((data) => setStoryIds(data));
  }, []);

  //
  return (
    <Swiper
      // spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Container>
          {storyIds.slice(0, 5).map((storyId, i) => (
            <TTop key={i} storyId={storyId} storyIds={storyIds} />
          ))}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container>
          {storyIds.slice(5, 10).map((storyId, i) => (
            <TTop key={i} storyId={storyId} storyIds={storyIds} />
          ))}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container>
          {storyIds.slice(10, 15).map((storyId, i) => (
            <TTop key={i} storyId={storyId} storyIds={storyIds} />
          ))}
        </Container>
      </SwiperSlide>
    </Swiper>
  );
};
