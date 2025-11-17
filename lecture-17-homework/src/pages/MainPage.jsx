import { Outlet } from "react-router-dom";
import Dartangan from "../assets/d'artagnan.jpg";
const MainPage = () => {
  return (
    <div className="main_container">
      <div className="main_content">
        <img src={Dartangan} alt="" />
        <div className="info_boxes">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
