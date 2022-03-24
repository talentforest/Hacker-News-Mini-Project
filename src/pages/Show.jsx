import { useEffect, useState } from "react";
import { getShowStoryIds } from "util/hnApi";
import Banner from "components/layout/Banner";
import SortViewModeBtn from "components/common/SortViewModeBtn";
import ShowPostBox from "components/Show/ShowPostBox";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Show() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getShowStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/show_banner.png" />
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
                  <ShowPostBox key={storyId} storyId={storyId} />
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
  padding: 20px 20px 0 20px;
  padding-bottom: 158px;
`;
