import React from "react";
import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "../../components/Header";

interface ILayout {
  isVertical: boolean;
}
const Layout: React.FC<ILayout> = ({ isVertical }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}
    >
      <PrimarySearchAppBar isVertical={isVertical} />
      <main style={{ flexGrow: "1" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
