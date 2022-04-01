import { useEffect, useState } from "react";
import { getTopStoryIds } from "util/hnApi";
import { PostsBox, Wrapper } from 'theme/commonStyle';
import TopPostBox from "components/Top/TopPostBox";

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
    <Wrapper>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={true}
        pagination={{ type: "fraction" }}
      >
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(0, 20).map((storyId, index) => (
              <TopPostBox key={storyId} storyId={storyId} index={index} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(20, 40).map((storyId, index) => (
              <TopPostBox key={storyId} storyId={storyId} index={index} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(40, 60).map((storyId, index) => (
              <TopPostBox key={storyId} storyId={storyId} index={index} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(60, 80).map((storyId, index) => (
              <TopPostBox key={storyId} storyId={storyId} index={index} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(80, 100).map((storyId, index) => (
              <TopPostBox key={storyId} storyId={storyId} index={index} />
            ))}
          </PostsBox>
        </SwiperSlide>

      </Swiper>
    </Wrapper>
  );
}


