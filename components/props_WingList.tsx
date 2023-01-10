export interface ProductListProps {
  productData: Product[];
}

export interface Product {
  _id: any;
  key: any;
  title: string;
  prices: number[];
  img: string;
  description: string;
}
