// import { useState, useEffect } from "react";
import styled from "styled-components";
import { TAsk } from "../homeComponents/TAsk";

const Container = styled.div`
  height: 520px;
  padding: 20px 20px 56px 20px;
  background-color: #fff;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;

export const TAskContainer = () => {
  return (
    <Container>
      <TAsk />
    </Container>
  );
};
