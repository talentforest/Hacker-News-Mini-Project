import Banner from "components/layout/Banner";
import ViewModeBtn from 'components/common/ViewModeBtn';
import TopTemplate from 'components/Templates/TopTemplate';
import { Suspense } from "react";

export default function Top() {
  return (
    <>
      <Banner src={require("assets/top_banner.png")} />
      <ViewModeBtn />
      <Suspense fallback={<div>Hello</div>}>
        <TopTemplate />
      </Suspense>
    </>
  )
};
