import React from "react";

const Card = ({ url, title, description, characters, getName }) => {
  return (
    <div className="card">
      <div>
        <img src={url} alt={title} />
      </div>
      <h4>Title: {title}</h4>
      <p>Description: {description}</p>
      <div className="card_characters">
        Characters:
        {characters.map((char, index) => (
          <div key={index}>{char}</div>
        ))}
      </div>
      <button onClick={() => getName(title, characters)}>More...</button>
    </div>
  );
};

export default Card;
