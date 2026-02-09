export interface ProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;

  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;

  tags: string[];

  brand?: string; // optional (some grocery items don’t have brand)
  sku: string;

  weight: number;
  dimensions: IDimensions;

  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: "In Stock" | "Low Stock";

  reviews: IReview[];

  returnPolicy: string;
  minimumOrderQuantity: number;

  meta: IMeta;

  images: string[];
  thumbnail: string;
}
export interface IDimensions {
  width: number;
  height: number;
  depth: number;
}
export interface IReview {
  rating: number;
  comment: string;
  date: string; // ISO string → parse to Date if needed
  reviewerName: string;
  reviewerEmail: string;
}
export interface IMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
