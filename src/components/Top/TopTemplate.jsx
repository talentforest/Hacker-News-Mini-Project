import { useEffect, useState } from "react";
import { getTopStoryIds } from "util/hnApi";
import ViewModeBtn from "components/common/ViewModeBtn";
import TopPostBox from "components/Top/TopPostBox";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TopTemplate() {


  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Wrapper>
        <ViewModeBtn />
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={true}
          pagination={{ type: "fraction" }}
        >
          {[1, 2, 3, 4, 5].map((items, index) => (
            <SwiperSlide key={items}>
              <Posts>
                {storyIds.slice(index, index + 20).map((storyId, index) => (
                  <TopPostBox key={storyId} storyId={storyId} index={index} />
                ))}
              </Posts>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  padding: 20px 0;
`;
const Posts = styled.section`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 158px;
`;
