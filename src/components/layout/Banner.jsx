import styled from "styled-components";

export default function Banner({ src }) {
  return <BannerImg src={src} />;
}

const BannerImg = styled.img`
  width: 100%;
  display: block;
`;
