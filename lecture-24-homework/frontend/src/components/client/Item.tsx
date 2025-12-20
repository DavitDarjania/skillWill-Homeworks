import type React from "react";

interface Item {
  id: string;
  inStock: boolean;
  item: string;
  url: string;
  price: string;
  discount: number;
}

const Item: React.FC<Item> = ({ id, inStock, item, url, discount, price }) => {
  return (
    <article
      className={`w-75 pb-5 border rounded-lg overflow-hidden shadow-lg hover:shadow-xl  scale-100 transition-transform ${
        inStock
          ? "bg-orange-100 hover:scale-102"
          : "bg-neutral-300 hover:scale-98"
      }`}
    >
      <div className="grid place-items-center bg-white">
        <img className="h-60 object-cover" src={url} alt={item} />
      </div>
      <div className="px-3 py-2">
        <p className="bg-amber-300 w-fit py-0.5 px-1.5 rounded-lg">
          {discount == 0 ? "No Discount" : `${discount}%`}
        </p>
        <h3 className="text-stone-900 mt-2">{item}</h3>
        <p className="mt-2">${price}</p>
        {inStock ? (
          <button className="bg-red-300 mt-2 py-1 px-2 rounded-xl hover:bg-red-400 transition-colors">
            Add To Cart
          </button>
        ) : (
          <p className="bg-neutral-400 mt-2 py-1 px-2 rounded-xl transition-colors w-fit">
            Out Ouf Stock
          </p>
        )}
      </div>
    </article>
  );
};

export default Item;
