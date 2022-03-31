import Banner from "components/layout/Banner";
import Button from 'components/Top/Button';
import TopUsersBox from "components/Top/TopUsersBox";
import styled from "styled-components"

export default function TopUsers() {
  return (
    <>
      <Banner src={require("assets/top_banner.png")} alt="top banner" />
      <Container>
        <Button />
      </Container>
      <TopUsersBox />
    </>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  padding-top: 20px;
`
