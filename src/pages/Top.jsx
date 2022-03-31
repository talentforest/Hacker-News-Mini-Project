import Banner from "components/layout/Banner";
import Button from 'components/Top/Button';
import TopTemplate from 'components/Top/TopTemplate';
import styled from "styled-components"

export default function Top() {
  return (
    <>
      <Banner src={require("assets/top_banner.png")} />
      <Container>
        <Button />
      </Container>
      <TopTemplate />
    </>
  )
};

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  padding-top: 20px;
`
