import React from "react";
import { Link, Outlet } from "react-router-dom";

const HeadFoot: React.FC = () => {
  return (
    <>
      <header className="flex justify-center mt-2">
        <ul className="flex gap-2">
          <li className="bg-amber-500 p-2 rounded-sm">
            <Link to={"/"}>Authors</Link>
          </li>
          <li className="bg-amber-500 p-2 rounded-sm">
            <Link to={"/games"}>Games</Link>
          </li>
          <li className="bg-amber-500 p-2 rounded-sm">
            <Link to={"/reviews"}>Reviews</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default HeadFoot;
