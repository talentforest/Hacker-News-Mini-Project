import { useEffect, useState } from "react";
import { getTopStoryIds } from "util/hnApi";
import TodaysTop from "./HomeComponents/TodaysTop";
import TitleClock from "../common/TitleClock";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const TodaysTopContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <Container>
      <TitleClock title="Today's Top" />
      <Swiper pagination={true} modules={[Pagination]}>
        {[1, 2, 3].map((items, index) => (
          <SwiperSlide key={items}>
            <Top>
              {storyIds?.slice(index, index + 5).map((storyId, index) => (
                <TodaysTop key={storyId} storyId={storyId} index={index} />
              ))}
            </Top>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 650px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Top = styled.ul`
  background-color: ${(props) => props.theme.containerColor};
  height: 490px;
  margin: 20px 20px 32px 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export default TodaysTopContainer;
