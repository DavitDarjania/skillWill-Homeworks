import { v4 as uuid } from "uuid";
export class Cart {
  item: string;
  inStock: boolean;
  id: string;
  url: string;

  constructor(item: string, inStock: boolean, url: string) {
    this.item = item;
    this.inStock = inStock;
    this.id = uuid();
    this.url = url;
  }
}
