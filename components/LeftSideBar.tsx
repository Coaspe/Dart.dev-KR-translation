import Language from "./LeftSideBarRows/Language";

interface props {
  selected: string;
}
const LeftSideBar: React.FC<props> = ({ selected }) => {
  return (
    <div id="sidenav" style={{ maxHeight: "663px" }}>
      <div className="site-sidebar">
        <ul>
          <Language selected={selected} />
          <li>eff</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
