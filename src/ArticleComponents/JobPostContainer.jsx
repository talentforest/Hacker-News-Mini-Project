import { useEffect, useState } from "react";
import styled from "styled-components";
import { JobPostBox } from "./JobPostBox";
import { BannerBox, BannerBox2 } from "./JobBannerBox";
import { getJobStoryIds } from "../api/hnApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Wrapper = styled.section`
  padding: 12px 0 44px;
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;
const Posts = styled.div`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  margin: 12px auto 0;
  width: 350px;
  height: 604px;
`;
const ApplyBanner = styled.section`
  position: relative;
  width: 390px;
`;
const BannerImg = styled.img`
  width: 390px;
  display: block;
`;
const BannerSlide = styled.div`
  position: absolute;
  width: 370px;
  display: flex;
  top: 104px;
  left: 20px;
`;
const BannerSlide2 = styled.div`
  position: absolute;
  width: 370px;
  display: flex;
  top: 54px;
  left: 20px;
`;

export const JobPostContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getJobStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <Posts>
        {storyIds.slice(0, 5).map((storyId, index) => (
          <JobPostBox key={storyId} storyId={storyId} storyIds={storyIds} />
        ))}
      </Posts>
      <ApplyBanner>
        <BannerImg src="/assets/applynow.png" alt="apply banner" />
        <BannerSlide>
          <Swiper slidesPerView={1}>
            <SwiperSlide>
              {storyIds.slice(0, 1).map((storyId, index) => (
                <BannerBox key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(1, 2).map((storyId, index) => (
                <BannerBox key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(2, 3).map((storyId, index) => (
                <BannerBox key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(3, 4).map((storyId, index) => (
                <BannerBox key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(4, 5).map((storyId, index) => (
                <BannerBox key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
          </Swiper>
        </BannerSlide>
      </ApplyBanner>

      <Posts>
        {storyIds.slice(5, 10).map((storyId, index) => (
          <JobPostBox key={storyId} storyId={storyId} storyIds={storyIds} />
        ))}
      </Posts>
      <ApplyBanner>
        <BannerImg src="/assets/applyimg.png" alt="apply banner" />
        <BannerSlide2>
          <Swiper slidesPerView={1}>
            <SwiperSlide>
              {storyIds.slice(0, 1).map((storyId, index) => (
                <BannerBox2 key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(1, 2).map((storyId, index) => (
                <BannerBox2 key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(2, 3).map((storyId, index) => (
                <BannerBox2 key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(3, 4).map((storyId, index) => (
                <BannerBox2 key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(4, 5).map((storyId, index) => (
                <BannerBox2 key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
          </Swiper>
        </BannerSlide2>
      </ApplyBanner>

      <Posts>
        {storyIds.slice(10, 15).map((storyId, index) => (
          <JobPostBox key={storyId} storyId={storyId} />
        ))}
      </Posts>
    </Wrapper>
  );
};
