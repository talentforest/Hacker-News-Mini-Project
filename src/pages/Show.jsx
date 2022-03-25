import { useEffect, useState } from "react";
import { getShowStoryIds } from "util/hnApi";
import { imgBaseUrl } from 'util/Constant';
import Banner from "components/layout/Banner";
import SortViewModeBtn from "components/common/SortViewModeBtn";
import ShowBox from "components/Show/ShowBox";
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
      <Banner src={`${imgBaseUrl}show_banner.png`} alt="show banner" />
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
                  <ShowBox key={storyId} storyId={storyId} />
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
