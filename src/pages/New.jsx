import { useEffect, useState } from "react";
import { getNewStoryIds } from "util/hnApi";
import Banner from "components/layout/Banner";
import ViewModeBtn from "components/common/ViewModeBtn";
import NewBox from "components/New/NewBox"
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function New() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src={require("assets/new_banner.png")} />
      <Wrapper>
        <ViewModeBtn />
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
                  <NewBox key={storyId} storyId={storyId} />
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

