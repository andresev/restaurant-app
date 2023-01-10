import React, { use, useState } from 'react';

async function getProduct(product: string) {
  const res = await fetch(`http://localhost:3000/api/products/${product}`);

  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }

  return res.json();
}

const Product = async ({ params: { product } }) => {
  const productData = getProduct(product);

  const [wingProduct] = await Promise.all([productData]);
  console.log(wingProduct);

  return <div>{wingProduct}</div>;
};

export default Product;
