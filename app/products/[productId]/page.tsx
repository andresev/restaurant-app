import React from 'react';
import { Product } from '../../../typings';

type PageProps = {
  params: {
    productId: string;
  };
};

async function getProduct(productId: string) {
  const res = await fetch(`http://localhost:3000/api/products/${productId}`);
  const item: Product = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }

  return item;
}

const ProductPage = async ({ params: { productId } }: PageProps) => {
  const productData = await getProduct(productId);
  console.log(productData);
  return <div>{productData.title}</div>;
};

export default ProductPage;
