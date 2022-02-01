import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 20px;
`;
const Articles = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 604px;
  padding-top: 12px 20px 40px;
  margin: 0 auto;
`;
const Article = styled.div`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 104px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  background-color: #fff;
  padding: 0 12px;
  h4 {
    display: flex;
    align-items: center;
    font-weight: 600;
    line-height: 24px;
    height: 64px;
    padding: 12px 0 4px;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #b7b7b7;
  height: 40px;
  a {
    text-decoration: underline;
  }
`;
const ApplyBanner = styled.div`
  position: relative;
`;
const BannerImg = styled.img`
  width: 390px;
  height: 310px;
`;
const Banners = styled.div`
  display: flex;
  width: 1000px;
  background-color: whitesmoke;
  overflow: scroll;
`;
const Banner = styled.div`
  position: absolute;
  top: 105px;
  left: 20px;
  margin: 0 auto;
  /* border: 1px solid red; */
  width: 351px;
  height: 151px;
  background-color: #fff;
  border-radius: 8px;
`;
const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 52px;
    height: 52px;
  }
`;
const Company = styled.span`
  font-size: 18px;
  font-weight: 700;
  height: 27px;
  padding-top: 3px;
  text-align: center;
`;
const Job = styled.span`
  font-weight: 700;
  height: 27px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
`;
const Tags = styled.div`
  width: 104px;
  height: 17px;
  background-color: #ed702d;
  color: #fff;
  font-size: 10px;
  padding: 4px 8px 2px;
  align-items: center;
  border-radius: 8px;
  margin: 10px 0 4px 12px;
`;
export const JobArticles = () => {
  return (
    <Wrapper>
      <Articles>
        <Article>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
          <Info>
            <a href="#">decycle.com</a>
            <span>2 hours</span>
          </Info>
        </Article>
      </Articles>
      <ApplyBanner>
        <BannerImg src="img/applynow.png" alt="apply banner" />
        <Banners>
          <Banner>
            <Tags>Software Engineers</Tags>
            <CompanyInfo>
              <img src="img/company_logo.png" alt="company logo" />
              <Company>Reverie Labs(YC W18)</Company>
              <Job>Full-Stack Engineers and Designer</Job>
            </CompanyInfo>
          </Banner>
          <Banner>
            <Tags>Software Engineers</Tags>
            <CompanyInfo>
              <img src="img/company_logo.png" alt="company logo" />
              <Company>Reverie Labs(YC W18)</Company>
              <Job>Full-Stack Engineers and Designer</Job>
            </CompanyInfo>
          </Banner>
          <Banner>
            <Tags>Software Engineers</Tags>
            <CompanyInfo>
              <img src="img/company_logo.png" alt="company logo" />
              <Company>Reverie Labs(YC W18)</Company>
              <Job>Full-Stack Engineers and Designer</Job>
            </CompanyInfo>
          </Banner>
        </Banners>
      </ApplyBanner>
    </Wrapper>
  );
};
