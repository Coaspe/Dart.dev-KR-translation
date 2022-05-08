import Language from "./LeftSideBarRows/Language";

interface props {
  selected: string;
}
const LeftSideBar: React.FC<props> = ({ selected }) => {
  return (
    <div
      className="hidden lg:block"
      id="sidenav"
      style={{ top: "50px", maxHeight: "653px" }}
    >
      <div className="site-sidebar ">
        <Language selected={selected} />
      </div>
    </div>
  );
};

export default LeftSideBar;
