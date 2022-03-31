import { useEffect, useState } from "react";
import { getTopStoryIds } from "util/hnApi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Banner from "components/layout/Banner";
import ViewModeBtn from "components/common/ViewModeBtn";
import TopPostBox from "components/Top/TopPostBox";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Top() {
  const location = useLocation();

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src={require("assets/top_banner.png")} />
      <Wrapper>
        <Btn>
          <Link to="/top">
            <PostBtn>Post</PostBtn>
            {location.pathname === "/top" ? <CurrBtn /> : <></>}
          </Link>
          <Link to="/user">
            <UsersBtn>Users</UsersBtn>
            {location.pathname === "/user" ? <CurrUsersBtn /> : <></>}
          </Link>
        </Btn>
      </Wrapper>
      <Wrapper>
        <ViewModeBtn />
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={true}
          pagination={{ type: "fraction" }}
        >
          {[1, 2, 3, 4, 5].map((items, index) => (
            <SwiperSlide key={items}>
              <Posts>
                {storyIds.slice(index, index + 20).map((storyId, index) => (
                  <TopPostBox key={storyId} storyId={storyId} index={index} />
                ))}
              </Posts>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  padding: 20px 0;
`;
const Posts = styled.section`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 158px;
`;

const Btn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin: auto;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #dfdfdf;
  background-color: ${(props) => props.theme.containerColor};
`;
const PostBtn = styled.button`
  position: relative;
  border-radius: 20px;
  width: 171px;
  height: 32px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  z-index: 1;
`;
const UsersBtn = styled.button`
  position: relative;
  border-radius: 20px;
  width: 171px;
  height: 32px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: ${(props) => props.theme.toggleBtnTextColor};
  cursor: pointer;
  z-index: 1;
`;

const CurrBtn = styled.div`
  position: absolute;
  width: 171px;
  height: 32px;
  border-radius: 20px;
  border: none;
  background-color: #ed702d;
  left: 3px;
  top: 3px;
`;
const CurrUsersBtn = styled.div`
  position: absolute;
  width: 171px;
  height: 32px;
  border-radius: 20px;
  border: none;
  background-color: #ed702d;
  right: 3px;
  top: 3px;
`;

