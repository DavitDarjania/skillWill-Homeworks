import Item from "../components/client/Item";
import { ProductsList } from "../types/Products";

const Client = () => {
  return (
    <section className="grid grid-cols-4 place-items-center gap-y-5 bg-neutral-50 py-3">
      {ProductsList.map(({ discount, id, inStock, name, price, url }) => {
        return (
          <Item
            id={id}
            inStock={inStock}
            item={name}
            url={url}
            key={id}
            price={price}
            discount={discount}
          />
        );
      })}
    </section>
  );
};

export default Client;
