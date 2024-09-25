import { Sidebar } from "primereact/sidebar";
import AsideBar from "../../components/Dashboard/AsideBar/AsideBar";

const ToggleAsideBar = ({ visibleRight, setVisibleRight }) => {
  return (
    <div>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <AsideBar />
      </Sidebar>
    </div>
  );
};

export default ToggleAsideBar;
