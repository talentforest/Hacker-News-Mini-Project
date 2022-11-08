import { Swiper } from "swiper/react";
import styled from "styled-components";

export const SwiperContainer = styled(Swiper)`
  position: relative;
  min-height: fit-content;
  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
  }

  .swiper-pagination-current,
  .swiper-pagination-total {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0 5px;
  }

  .swiper-pagination-fraction {
    bottom: 40px;
    background-color: #fff;
    border: 1px solid #dfdfdf;
    width: 71px;
    height: 30px;
    border-radius: 20px;
    padding-top: 3px;
    margin-left: calc((100vw - 71px) / 2);
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: auto;
    bottom: 40px;
    z-index: 10;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #fff;
    border: 1px solid #dfdfdf;
  }

  .swiper-button-prev {
    left: 26vw;
  }

  .swiper-button-next {
    right: 26vw;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    padding: 10px;
    font-weight: bold;
    font-size: 12px;
  }
`;
