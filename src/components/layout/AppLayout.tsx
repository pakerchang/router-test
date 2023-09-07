import { Outlet } from "react-router-dom";
import "./AppLayout.style.css";
import "../component.style.css";
import Header from "../Header";
import Footer from "../Footer";
import SubFooter from "../SubFooter";

interface IAppLayoutProps {
  isHidden?: boolean;
  isShowSubPages?: boolean;
}
const AppLayout = ({ isHidden, isShowSubPages = false }: IAppLayoutProps) => {
  return (
    <div className="appLayout">
      <Header isShowSubPages={isShowSubPages} />
      <Outlet />
      {isHidden ? <SubFooter /> : <Footer />}
    </div>
  );
};

export default AppLayout;
