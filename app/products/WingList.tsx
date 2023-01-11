import React from 'react';
import { Product } from '../../typings';
import WingCard from './WingCard';
import Link from 'next/link';

async function getData() {
  const res = await fetch('http://localhost:3000/api/products');
  const products: Product[] = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return products;
}

const WingList = async () => {
  const productData = await getData();
  return (
    <>
      {productData.map((item) => (
        <Link href={`/products/${item._id}`}>
          <WingCard
            _id={item._id}
            // key={item._id}
            title={item.title}
            prices={item.prices}
            description={item.description}
            img={item.img}
          />
        </Link>
      ))}
    </>
  );
};

export default WingList;
