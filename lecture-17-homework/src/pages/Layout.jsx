import { Link, Outlet } from "react-router-dom";
import MainIcon from "../assets/saber.png";

const Layout = () => {
  return (
    <>
      <header>
        <div className="main_container">
          <div className="wrapper_container">
            <Link to={"/"}>
              <img src={MainIcon} alt="" />
            </Link>
            <nav>
              <Link to={"/about"}>About</Link>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="main_container">
          <Link to={"/"}>Main</Link> <br />
          <Link to={"/about"}>About</Link>
        </div>
      </footer>
    </>
  );
};

export default Layout;
