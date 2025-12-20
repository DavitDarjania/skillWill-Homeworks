import { v4 as uuid } from "uuid";

export class Cart {
  item;
  inStock;
  id;
  url;

  constructor(item, inStock, url) {
    this.item = item;
    this.inStock = inStock;
    this.id = uuid();
    this.url = url;
  }
}
