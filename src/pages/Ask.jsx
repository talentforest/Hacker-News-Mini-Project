import { useEffect, useState } from "react";
import { getAskStoryIds } from "util/hnApi";
import Banner from "components/layout/Banner";
import AskBox from "components/Ask/AskBox"
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Ask() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getAskStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src={require("assets/ask_banner.png")} alt="BannerImg" />
      <Wrapper>
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
                  <AskBox key={storyId} storyId={storyId} />
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
  padding-top: 20px;
  padding-bottom: 158px;
`;

