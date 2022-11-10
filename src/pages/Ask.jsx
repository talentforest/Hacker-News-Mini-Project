import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { getAskStoryIds } from "util/hnApi";
import { Banner } from "./Home";
import { SwiperContainer } from "theme/swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AskBox from "components/organisms/ask/AskBox";
import styled from "styled-components";

const Ask = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getAskStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src={require("assets/ask_banner.png")} alt="banner" />
      <SwiperContainer
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={true}
        pagination={{ type: "fraction" }}
      >
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(0, 20).map((storyId) => (
              <AskBox key={storyId} storyId={storyId} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(20, 40).map((storyId) => (
              <AskBox key={storyId} storyId={storyId} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(40, 60).map((storyId) => (
              <AskBox key={storyId} storyId={storyId} />
            ))}
          </PostsBox>
        </SwiperSlide>
      </SwiperContainer>
    </>
  );
};

const PostsBox = styled.div`
  background-color: ${(props) => props.theme.background.default};
  padding-bottom: 100px;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px 10px;
`;

export default Ask;
