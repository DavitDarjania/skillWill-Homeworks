import React from "react";
import { ButtonProgress, TaskItem } from "../styledComponents/Progress";

const Card = ({ cardState, onAddClick }) => {
  return (
    <>
      {cardState.map((el) => (
        <TaskItem $myColor={el.color} key={el.id}>
          {el.task}
        </TaskItem>
      ))}
      <ButtonProgress onClick={onAddClick}>+</ButtonProgress>
    </>
  );
};

export default Card;
