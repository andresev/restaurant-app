// 'use client';
import React from 'react';
import { Product } from '../../../typings';
import Image from 'next/image';
import img from '../../../assets/img/wings-default.jpg';

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
  // const [sauce, setSauces] = useState(0);

  // const handleChange = (e: any, option: any) => {
  //   const checked = e.target.checked;

  //   if (checked) {
  //   }
  // };
  const product = await getProduct(productId);
  console.log(product);
  return (
    <div className="flex flex-col items-center p-10 h-full w-full bg-[#f8dcc9]">
      <Image className="w-40 h-40 rounded-full" alt="wing-combo" src={img} />
      <h3 className="text-2xl font-bold text-black p-2">{product.title}</h3>
      <span className="text-xl text-orange-500 border-b border-orange-500">{product.prices[0]}</span>
      <p className="text-base text-black">{product.description}</p>
      <div className="flex flex-col items-start w-full py-2">
        <h3 className="text-2xl font-bold text-orange-500">
          Choose your flavor ({`${product.flavors[0].limit} flavor`})
        </h3>
        {product.flavors.map((items: any, index: number) => (
          <div className="" key={index}>
            {items.text.map((flavor: string, index: number) => (
              <div key={index} className="py-0.5">
                <input
                  className="w-6 h-6 shadow rounded-md"
                  type="checkbox"
                  id={flavor}
                  name={flavor}
                />
                <span key={index} className="text-lg text-black pl-2">
                  {flavor}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='flex flex-col items-start w-full py-2'>
        <h3 className="text-2xl font-bold text-orange-500">Add-ons</h3>
        {product.extraOptions.map((option: any, index: number) => (
          <div key={index} className="py-0.5">
            <input
              className="w-6 h-6 shadow rounded-md"
              type="checkbox"
              id={option.text}
              name={option.text}
              // onChange={(e) => handleChange(e, option)}
            />
            <label className="pl-2 text-lg text-black">{option.text}</label>
            <label className="pl-2 text-lg text-black">
              {`($${option.price.toFixed(2)})`}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
