import { useViewModeChange } from 'hooks/index';
import Banner from "components/layout/Banner";
import ViewModeBtn from "components/common/ViewModeBtn";
import ShowTemplate from 'components/Templates/ShowTemplate';
import ShowBoxModeTemplate from 'components/Templates/ShowBoxModeTemplate';

export default function Show() {
  const [viewMode, handleViewMode] = useViewModeChange();

  return (
    <>
      <Banner
        src={require("assets/show_banner.png")}
        alt="show banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      {viewMode === "list-mode" ? <ShowTemplate /> : <ShowBoxModeTemplate />}
    </>
  );
}

