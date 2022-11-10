import TitleClock from "components/molecules/TitleClock";
import TodaysTopPost from "components/organisms/home/TodaysTopPost";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const TodaysTop = ({ topStoryIds }) => {
  return (
    <section>
      <TitleClock title="Today's Top" />
      <SwiperList pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <ListBox>
            {topStoryIds?.slice(0, 5).map((storyId, index) => (
              <TodaysTopPost key={storyId} storyId={storyId} index={index} />
            ))}
          </ListBox>
        </SwiperSlide>
        <SwiperSlide>
          <ListBox>
            {topStoryIds?.slice(5, 10).map((storyId, index) => (
              <TodaysTopPost
                key={storyId}
                storyId={storyId}
                index={index + 5}
              />
            ))}
          </ListBox>
        </SwiperSlide>
        <SwiperSlide>
          <ListBox>
            {topStoryIds?.slice(10, 15).map((storyId, index) => (
              <TodaysTopPost
                key={storyId}
                storyId={storyId}
                index={index + 10}
              />
            ))}
          </ListBox>
        </SwiperSlide>
      </SwiperList>
    </section>
  );
};

const SwiperList = styled(Swiper)`
  padding-bottom: 20px;
  .swiper-slide {
    padding: 5px;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background-color: ${(props) => props.theme.text.gray};
  }
  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.text.orange};
    width: 8px;
    height: 8px;
  }
`;

const List = styled.ul`
  margin-top: 15px;
`;

const ListBox = styled(List)`
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.container.default};
  border-radius: 8px;
  min-height: 500px;
`;

export default TodaysTop;
