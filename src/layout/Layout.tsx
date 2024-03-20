import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
