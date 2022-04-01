import { useEffect, useState } from "react";
import { getShowStoryIds } from "util/hnApi";
import { PostsBox, Wrapper } from 'theme/commonStyle';
import ShowBox from "components/Show/ShowBox";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const ShowTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getShowStoryIds(setStoryIds);
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
            {storyIds.slice(0, 20).map((storyId) => (
              <ShowBox key={storyId} storyId={storyId} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(20, 40).map((storyId) => (
              <ShowBox key={storyId} storyId={storyId} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(40, 60).map((storyId) => (
              <ShowBox key={storyId} storyId={storyId} />
            ))}
          </PostsBox>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}

export default ShowTemplate;
