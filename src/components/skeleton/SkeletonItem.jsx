import styled from "styled-components";

const SkeletonItem = ({ width, height }) => {
  return <Skeleton $width={width} $height={height} />;
};

export const Skeleton = styled.div`
  width: ${(props) => props.$width || "100%"};
  min-height: ${(props) => props.$height || "15px"};
  background-color: ${(props) => props.theme.skeleton};
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;

export default SkeletonItem;
