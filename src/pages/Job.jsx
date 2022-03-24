import { useEffect, useState } from "react";
import { getJobStoryIds } from "util/hnApi";
import Banner from "components/layout/Banner";
import JobPostBox from "components/Job/JobPostBox";
import JobBannerBig from "components/Job/JobBannerBig";
import JobBannerSmall from "components/Job/JobBannerSmall";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Job() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getJobStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/job_banner.png" />
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
              {[1, 2, 3, 4, 5].map((items) => (
                <SwiperSlide key={items}>
                  {storyIds.slice(0, 5).map((storyId) => (
                    <JobBannerBig key={storyId} storyId={storyId} />
                  ))}
                </SwiperSlide>
              ))}
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
              {[1, 2, 3, 4, 5].map((items, index) => (
                <SwiperSlide key={items}>
                  {storyIds.slice(index + 10, index + 11).map((storyId) => (
                    <JobBannerSmall key={storyId} storyId={storyId} />
                  ))}
                </SwiperSlide>
              ))}
            </Swiper>
          </BannerSlide2>
        </ApplyBanner>

        <Posts>
          {storyIds.slice(10, 15).map((storyId) => (
            <JobPostBox key={storyId} storyId={storyId} />
          ))}
        </Posts>
      </Wrapper>
    </>
  );
}

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
