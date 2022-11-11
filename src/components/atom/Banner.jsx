import styled from "styled-components";

const BannerBox = ({ imgPath, page }) => {
  return (
    <Box>
      <Banner src={imgPath} alt={`${page} banner`} />
    </Box>
  );
};

const Box = styled.div`
  min-height: 230px;
  width: 100%;
`;

export const Banner = styled.img`
  width: 100%;
`;

export default BannerBox;
