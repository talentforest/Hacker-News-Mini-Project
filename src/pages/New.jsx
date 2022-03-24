import Banner from "../components/layout/Banner";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NewPostBox } from "../PostComponents/NewPostBox";
import { getNewStoryIds } from "../util/hnApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { SortViewModeBtn } from "../components/common/SortViewModeBtn";


export default function New() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/new_banner.png" />
      <Wrapper>
        <SortViewModeBtn />
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={true}
          pagination={{ type: "fraction" }}
        >
          {[1, 2, 3].map((items) => (
            <SwiperSlide key={items}>
              <Posts>
                {storyIds.slice(0, 20).map((storyId) => (
                  <NewPostBox key={storyId} storyId={storyId} />
                ))}
              </Posts>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding-top: 25px;
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;
const Posts = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0px;
  padding-bottom: 158px;
`;

