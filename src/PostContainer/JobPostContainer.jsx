import { useEffect, useState } from "react";
import styled from "styled-components";
import { JobPostBox } from "../PostComponents/JobPostBox";
import { BannerBox, BannerBox2 } from "../PostComponents/JobBannerBox";
import { getJobStoryIds } from "../util/hnApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Wrapper = styled.section`
  padding: 12px 0 20px;
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;
const Posts = styled.div`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  margin: 12px auto 40px;
  padding: 0 20px;
`;
const ApplyBanner = styled.section`
  position: relative;
  margin: 0 auto 30px;
  width: 100%;
`;
const BannerImg = styled.img`
  margin: 0 auto;
  display: block;
  width: 100%;
  height: 310px;
`;
const BannerImg2 = styled.img`
  margin: 0 auto;
  display: block;
  width: 100%;
  height: 178px;
`;
const BannerSlide = styled.div`
  position: absolute;
  top: 110px;
  width: 100%;
  margin: 0 auto;
`;
const BannerSlide2 = styled.div`
  position: absolute;
  display: flex;
  top: 54px;
  width: 100%;
`;

export const JobPostContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getJobStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <Posts>
        {storyIds.slice(0, 5).map((storyId) => (
          <JobPostBox key={storyId} storyId={storyId} />
        ))}
      </Posts>
      <ApplyBanner>
        <BannerImg
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/applynow.png"
          alt="apply banner"
        />
        <BannerSlide>
          <Swiper slidesPerView={1}>
            <SwiperSlide>
              {storyIds.slice(0, 1).map((storyId) => (
                <BannerBox key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(1, 2).map((storyId) => (
                <BannerBox key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(2, 3).map((storyId) => (
                <BannerBox key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(3, 4).map((storyId) => (
                <BannerBox key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(4, 5).map((storyId) => (
                <BannerBox key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
          </Swiper>
        </BannerSlide>
      </ApplyBanner>

      <Posts>
        {storyIds.slice(5, 10).map((storyId) => (
          <JobPostBox key={storyId} storyId={storyId} />
        ))}
      </Posts>
      <ApplyBanner>
        <BannerImg2
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/applyimg.png"
          alt="apply banner"
        />
        <BannerSlide2>
          <Swiper slidesPerView={1}>
            <SwiperSlide>
              {storyIds.slice(0, 1).map((storyId) => (
                <BannerBox2 key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(1, 2).map((storyId) => (
                <BannerBox2 key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(2, 3).map((storyId) => (
                <BannerBox2 key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(3, 4).map((storyId) => (
                <BannerBox2 key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {storyIds.slice(4, 5).map((storyId) => (
                <BannerBox2 key={storyId} storyId={storyId} />
              ))}
            </SwiperSlide>
          </Swiper>
        </BannerSlide2>
      </ApplyBanner>

      <Posts>
        {storyIds.slice(10, 15).map((storyId) => (
          <JobPostBox key={storyId} storyId={storyId} />
        ))}
      </Posts>
    </Wrapper>
  );
};
