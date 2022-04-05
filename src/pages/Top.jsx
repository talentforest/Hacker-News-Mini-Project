import { useViewModeChange } from 'hooks/index';
import Banner from "components/layout/Banner";
import ViewModeBtn from 'components/common/ViewModeBtn';
import TopTemplate from 'components/Templates/TopTemplate';
import TopBoxModeTemplate from 'components/Templates/TopBoxModeTemplate';

export default function Top() {
  const [viewMode, handleViewMode] = useViewModeChange();

  return (
    <>
      <Banner src={require("assets/top_banner.png")} />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      {viewMode === "list-mode" ? <TopTemplate /> : <TopBoxModeTemplate />}
    </>
  )
};
