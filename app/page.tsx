import React, { use } from 'react';
import WingList from '../components/WingList';

async function getData() {
  const res = await fetch('http://localhost:3000/api/products');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

function Page() {
  const productData = use(getData());

  return (
    <main className="bg-black-500">
      <WingList productData={productData} />
    </main>
  );
}

export default Page;
