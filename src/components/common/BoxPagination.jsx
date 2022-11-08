import { BoxViewMode } from "theme/commonStyle";
import BoxModeItem from "components/common/BoxModeItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BoxPagination = ({ storyIds }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={true}
      pagination={{ type: "fraction" }}
    >
      <SwiperSlide>
        <BoxViewMode>
          {storyIds.slice(0, 20).map((storyId, index) => (
            <BoxModeItem key={storyId} storyId={storyId} index={index} />
          ))}
        </BoxViewMode>
      </SwiperSlide>
      <SwiperSlide>
        <BoxViewMode>
          {storyIds.slice(20, 40).map((storyId, index) => (
            <BoxModeItem key={storyId} storyId={storyId} index={index} />
          ))}
        </BoxViewMode>
      </SwiperSlide>
      <SwiperSlide>
        <BoxViewMode>
          {storyIds.slice(40, 60).map((storyId, index) => (
            <BoxModeItem key={storyId} storyId={storyId} index={index} />
          ))}
        </BoxViewMode>
      </SwiperSlide>
    </Swiper>
  );
};

export default BoxPagination;
