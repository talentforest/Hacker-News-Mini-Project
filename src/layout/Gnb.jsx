import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Gnb = () => {
  const { pathname } = useLocation();

  return (
    <GnbNav>
      <ul>
        <Link to="/">
          <li>
            <span>Home</span>
            {pathname === "/" && <CurrPageMark />}
          </li>
        </Link>
        <Link to="/top">
          <li>
            <span>Top</span>
            {pathname?.includes("/top") && <CurrPageMark />}
          </li>
        </Link>
        <Link to="/new">
          <li>
            <span>New</span>
            {pathname?.includes("/new") && <CurrPageMark />}
          </li>
        </Link>
        <Link to="/show">
          <li>
            <span>Show</span>
            {pathname?.includes("/show") && <CurrPageMark />}
          </li>
        </Link>
        <Link to="/ask">
          <li>
            <span>Ask</span>
            {pathname?.includes("/ask") && <CurrPageMark />}
          </li>
        </Link>
        <Link to="/job">
          <li>
            <span>Job</span>
            {pathname?.includes("/job") && <CurrPageMark />}
          </li>
        </Link>
      </ul>
    </GnbNav>
  );
};

const GnbNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  margin-bottom: -1px;
  background-color: ${(props) => props.theme.background.default};
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    font-size: 15px;
    font-weight: 700;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      height: 100%;
      color: ${(props) => props.theme.text.default};
      &:hover {
        color: ${(props) => props.theme.text.lightGray};
        cursor: pointer;
      }
    }
  }
`;
const CurrPageMark = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: ${(props) => props.theme.text.orange};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

export default Gnb;
