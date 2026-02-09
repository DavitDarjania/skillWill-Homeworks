import styles from "./SectionItem.module.scss";
import React from "react";

interface sectionItemProps {
  title: string;
  description: string;
  price: number;
}

const SectionItem: React.FC<sectionItemProps> = ({
  title,
  description,
  price,
}) => {
  return (
    <article className={styles.article}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>$ {price}</p>
    </article>
  );
};

export default SectionItem;
