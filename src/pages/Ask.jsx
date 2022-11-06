import { Wrapper, AskPostsBox } from "theme/commonStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { getAskStoryIds } from "util/hnApi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AskBox from "components/ask/AskBox";

const Ask = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getAskStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <img src={require("assets/ask_banner.png")} alt="banner" />
      <Wrapper>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={true}
          pagination={{ type: "fraction" }}
        >
          <SwiperSlide>
            <AskPostsBox>
              {storyIds.slice(0, 20).map((storyId) => (
                <AskBox key={storyId} storyId={storyId} />
              ))}
            </AskPostsBox>
          </SwiperSlide>
          <SwiperSlide>
            <AskPostsBox>
              {storyIds.slice(20, 40).map((storyId) => (
                <AskBox key={storyId} storyId={storyId} />
              ))}
            </AskPostsBox>
          </SwiperSlide>
          <SwiperSlide>
            <AskPostsBox>
              {storyIds.slice(40, 60).map((storyId) => (
                <AskBox key={storyId} storyId={storyId} />
              ))}
            </AskPostsBox>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </>
  );
};

export default Ask;
