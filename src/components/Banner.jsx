import styled from "styled-components";

const BannerImg = styled.img`
  width: 390px;
  display: block;
`;

export default function Banner({ src }) {
  return <BannerImg src={src} />;
}
