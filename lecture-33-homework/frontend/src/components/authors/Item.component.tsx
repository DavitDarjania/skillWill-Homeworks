import React from "react";
import type { IAuthor } from "../../types/Author.types";
import { useNavigate } from "react-router-dom";

interface authorQueryProps extends IAuthor {}
const Item: React.FC<authorQueryProps> = ({ id, name, verified }) => {
  const navigate = useNavigate();
  return (
    <article
      onClick={() => navigate(`/${id}`)}
      className="bg-amber-300 text-amber-900 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <h4>{name}</h4>
      {verified ? <p>Author is Verified</p> : <p>Author is not Verified</p>}
    </article>
  );
};

export default Item;
