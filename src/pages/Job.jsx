import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperContainer } from "theme/swiper";
import { getJobStoryIds } from "util/hnApi";
import { Banner } from "./Home";
import BigBanner from "components/job/BigBanner";
import SmallBanner from "components/job/SmallBanner";
import JobBox from "components/job/JobBox";
import styled from "styled-components";

const Job = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getJobStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src={require("assets/job_banner.png")} alt="banner" />
      <Container>
        <JobPosts>
          {storyIds.slice(0, 5).map((storyId) => (
            <JobBox key={storyId} storyId={storyId} />
          ))}
        </JobPosts>
        <ApplyBanner>
          <JobBanner src={require("assets/applynow.png")} alt="apply banner" />
          <Swiper slidesPerView={1}>
            {[1, 2, 3, 4, 5].map((items, index) => (
              <SwiperSlide key={items}>
                {storyIds.slice(index, index + 1).map((storyId) => (
                  <BigBanner key={storyId} storyId={storyId} />
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </ApplyBanner>
        <JobPosts>
          {storyIds.slice(5, 10).map((storyId) => (
            <JobBox key={storyId} storyId={storyId} />
          ))}
        </JobPosts>
        <ApplyBanner>
          <JobBanner src={require("assets/applyimg.png")} alt="apply banner" />
          <Swiper $small slidesPerView={1}>
            {[1, 2, 3, 4, 5].map((items, index) => (
              <SwiperSlide key={items}>
                {storyIds.slice(index + 5, index + 6).map((storyId) => (
                  <SmallBanner key={storyId} storyId={storyId} />
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </ApplyBanner>
        <JobPosts>
          {storyIds.slice(10, 15).map((storyId) => (
            <JobBox key={storyId} storyId={storyId} />
          ))}
        </JobPosts>
      </Container>
    </>
  );
};

const Container = styled.section`
  padding: 12px 0 20px;
  min-height: 90vh;
  background-color: ${(props) => props.theme.background.gray};
`;

const ApplyBanner = styled.div`
  position: relative;
  margin: 30px auto;
  width: 100%;
`;

const Swiper = styled(SwiperContainer)`
  position: absolute;
  display: flex;
  top: ${(props) => (props.$small ? "54px" : "110px")};
  width: 100%;
  margin: 0 auto;
`;

const JobBanner = styled.img`
  width: 100%;
  height: auto;
`;

const JobPosts = styled.div`
  min-height: 70vh;
`;

export default Job;
