import ViewModeItem from "components/molecules/ViewModeItem";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";

const { SwiperContainer } = require("theme/swiper");

const SwiperPagination = ({ storyIds, viewMode }) => {
  return (
    <SwiperContainer
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={true}
      pagination={{ type: "fraction" }}
    >
      <SwiperSlide>
        <PostsBox>
          {storyIds.slice(0, 20).map((storyId) => (
            <ViewModeItem key={storyId} storyId={storyId} viewMode={viewMode} />
          ))}
        </PostsBox>
      </SwiperSlide>
      {storyIds.length > 21 && (
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(20, 40).map((storyId) => (
              <ViewModeItem
                key={storyId}
                storyId={storyId}
                viewMode={viewMode}
              />
            ))}
          </PostsBox>
        </SwiperSlide>
      )}
      {storyIds.length > 41 && (
        <SwiperSlide>
          <PostsBox>
            {storyIds.slice(40, 60).map((storyId) => (
              <ViewModeItem
                key={storyId}
                storyId={storyId}
                viewMode={viewMode}
              />
            ))}
          </PostsBox>
        </SwiperSlide>
      )}
    </SwiperContainer>
  );
};

const PostsBox = styled.div`
  background-color: ${(props) => props.theme.background.default};
  padding: 0 20px 100px;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px 10px;
`;

export default SwiperPagination;
