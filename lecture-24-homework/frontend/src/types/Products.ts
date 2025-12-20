interface Product {
  name: string;
  price: string;
  url: string;
  id: string;
  inStock: boolean;
  discount: number;
}

export const ProductsList: Product[] = [
  {
    id: "p1",
    name: "Apple iPhone 14 Pro",
    price: "999",
    url: "https://s3.amazonaws.com/iwm-ebay/images/products/iPhone+14+Pro/iPhone+14+Pro+Purple.jpg",
    inStock: true,
    discount: 10,
  },
  {
    id: "p2",
    name: "Samsung Galaxy S23 Ultra",
    price: "1199",
    url: "https://unicom.ge/files/products/F6GaWUseRUoC0Gcpdz1p5EOkdKoVGM.jpg",
    inStock: true,
    discount: 15,
  },
  {
    id: "p3",
    name: "Sony WH-1000XM5 Headphones",
    price: "399",
    url: "https://media.veli.store/media/product/Sony_WH-1000XM5_Wireless_Noise_Canceling_Stereo_Headset_Black.png",
    inStock: false,
    discount: 0,
  },
  {
    id: "p4",
    name: "Apple MacBook Pro",
    price: "1299",
    url: "https://i.ebayimg.com/images/g/twIAAOSw76dnrM5C/s-l1600.webp",
    inStock: true,
    discount: 5,
  },
  {
    id: "p5",
    name: "Logitech MX Master 3S Mouse",
    price: "99",
    url: "https://media.veli.store/media/product/Logitech_MX_Master_3_Wireless_Mouse_Graphite-4.jpg",
    inStock: true,
    discount: 20,
  },
];
