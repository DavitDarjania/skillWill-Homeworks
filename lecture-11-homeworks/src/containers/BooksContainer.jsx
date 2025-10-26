import Card from "../components/Card";
import books from "../books";

const BooksContainer = () => {
  const getName = (name, characters) => {
    alert(name + " | " + characters);
  };
  return (
    <div className="books_container">
      {books.map(({ id, url, title, description, characters }) => (
        <Card
          key={id}
          url={url}
          title={title}
          description={description}
          characters={characters}
          getName={getName}
        />
      ))}
    </div>
  );
};

export default BooksContainer;
