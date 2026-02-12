import { useQuery } from "@apollo/client/react";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR } from "../gql/Author.query";
import type { IAuthor } from "../types/Author.types";

interface authorQueryProps {
  author: IAuthor;
}
const Author: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  const { data, loading, error } = useQuery<authorQueryProps>(GET_AUTHOR, {
    variables: { authorId: id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error {error.message}</h1>;
  return (
    <div className="bg-amber-300 w-fit mx-auto p-3 rounded-2xl mt-3">
      <h2 className="border-b-2">Individual Author</h2>
      <h3 className="mt-3">Name: {data?.author.name}</h3>
      {data?.author.verified ? (
        <p>Author is Verified</p>
      ) : (
        <p>Author is not Verified</p>
      )}
    </div>
  );
};

export default Author;
