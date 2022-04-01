import { useEffect, useState } from "react";
import { getNewStoryIds } from "util/hnApi";
import { PostsBox, Wrapper } from 'theme/commonStyle';
import BasicLayoutBox from 'components/common/BasicLayoutBox';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const NewTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds(setStoryIds);
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
              <BasicLayoutBox key={storyId} storyId={storyId} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(20, 40).map((storyId) => (
              <BasicLayoutBox key={storyId} storyId={storyId} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(40, 60).map((storyId) => (
              <BasicLayoutBox key={storyId} storyId={storyId} />
            ))}
          </PostsBox>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}

export default NewTemplate;
