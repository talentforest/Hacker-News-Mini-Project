import { useViewModeChange } from 'hooks/index';
import Banner from "components/layout/Banner";
import ViewModeBtn from "components/common/ViewModeBtn";
import NewTemplate from 'components/Templates/NewTemplate';
import NewBoxModeTemplate from 'components/Templates/NewBoxModeTemplate';

export default function New() {
  const [viewMode, handleViewMode] = useViewModeChange();

  return (
    <>
      <Banner
        src={require("assets/new_banner.png")}
        alt="Banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      {viewMode === "list-mode" ? <NewTemplate /> : <NewBoxModeTemplate />}
    </>
  );
}
