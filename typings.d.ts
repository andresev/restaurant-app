export type Product = {
  _id: string;
  title: string;
  img: string;
  flavors: [{ text: string; limit: number }];
  prices: number[];
  description: string;
  extraOptions: [];
};
