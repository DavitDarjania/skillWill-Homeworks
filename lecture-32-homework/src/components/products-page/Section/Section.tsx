import React from "react";
import styles from "./Section.module.scss";
import SectionItem from "./SectionItem";
import { useGetProductsQuery } from "../../../context/rtkQuery/products";

const Section: React.FC = () => {
  const { isLoading, data } = useGetProductsQuery();
  console.log(data);

  if (isLoading) return <p>is loading...</p>;
  return (
    <section className={styles.section}>
      <h1>Products Section</h1>
      <div className={styles.mainBox}>
        {data?.products.map(({ id, title, description, price }) => (
          <SectionItem
            key={id}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;
