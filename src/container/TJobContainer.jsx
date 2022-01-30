// import { useState, useEffect } from "react";
import styled from "styled-components";
import { TJob } from "../homeComponents/TJob";

const Container = styled.div`
  height: 266px;
  padding: 20px 20px 72px 20px;
  background-color: #fff;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;

export const TJobContainer = () => {
  return (
    <Container>
      <TJob />
    </Container>
  );
};
