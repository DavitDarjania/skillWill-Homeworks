import { useNavigate } from "react-router-dom";
import Button from "../../components/main-page/Button/Button";
import React from "react";
import Section from "../../components/main-page/Section/Section";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const navigateToProducts = () => {
    navigate("/products");
  };
  return (
    <div>
      <Button action={navigateToProducts} name={"products"} />
      <Section />
    </div>
  );
};

export default MainPage;
