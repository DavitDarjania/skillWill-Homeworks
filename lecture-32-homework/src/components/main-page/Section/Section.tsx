import React from "react";
import styles from "./Section.module.scss";

const Section: React.FC = () => {
  return (
    <section className={styles.section}>
      <h1>Main Section</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        quaerat omnis unde ab quas expedita ex veritatis optio dolorem impedit!
        Sapiente ullam ad minima reiciendis necessitatibus mollitia eaque
        facere! Ea voluptas assumenda qui incidunt voluptatibus est asperiores
        rem ullam nesciunt omnis cum doloremque eius, quae officiis voluptatem
        repudiandae? Id, velit?
      </p>
    </section>
  );
};

export default Section;
