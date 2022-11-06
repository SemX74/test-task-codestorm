import { ReactComponent as BgWaves } from "../../Misc/bgVectors.svg";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="layout">
      <Outlet />
      <BgWaves className="layout__bg-waves" />
    </div>
  );
};

export default Layout;
