import { useQuery } from "@apollo/client/react";
import React from "react";
import { GET_AUTHORS } from "../../gql/Author.query";
import type { IAuthor } from "../../types/Author.types";
import Item from "./Item.component";

interface authorsQueryProps {
  authors: IAuthor[];
}
const List: React.FC = () => {
  const { data, loading, error } = useQuery<authorsQueryProps>(GET_AUTHORS);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error {error.message}</h1>;

  return (
    <section className="grid grid-cols-3 gap-4 bg-amber-100 w-300 mx-auto mt-2 rounded-2xl">
      {data?.authors.map(({ id, name, verified }) => (
        <Item key={id} id={id} name={name} verified={verified} />
      ))}
    </section>
  );
};

export default List;
