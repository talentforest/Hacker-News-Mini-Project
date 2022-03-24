import styled from "styled-components";

const Banner = ({ src }) => {
  return <BannerImg src={src} />;
}

const BannerImg = styled.img`
  width: 100%;
  display: block;
`;

export default Banner;
