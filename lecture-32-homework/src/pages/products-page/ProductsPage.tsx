import { useNavigate } from "react-router-dom";
import Button from "../../components/main-page/Button/Button";
import React from "react";
import Section from "../../components/products-page/Section/Section";

const ProductsPage: React.FC = () => {
  const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate("/");
  };
  return (
    <div>
      <Button action={navigateToMainPage} name="main" />
      <Section />
    </div>
  );
};

export default ProductsPage;
