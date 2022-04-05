import { PostsBox, Wrapper } from 'theme/commonStyle';
import ListModeItem from 'components/common/ListModeItem';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ListPagination = ({ storyIds }) => {
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
              <ListModeItem key={storyId} storyId={storyId} index={index} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(20, 40).map((storyId, index) => (
              <ListModeItem key={storyId} storyId={storyId} index={index} />
            ))}
          </PostsBox>
        </SwiperSlide>
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(40, 60).map((storyId, index) => (
              <ListModeItem key={storyId} storyId={storyId} index={index} />
            ))}
          </PostsBox>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}

export default ListPagination;
