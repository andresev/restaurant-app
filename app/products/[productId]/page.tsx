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
    <div className="flex justify-center items-start w-screen h-screen p-16 bg-[#f8dcc9]">
      <div className="flex flex-row justify-center p-5 ">
        <div className="">
          <Image
            className="w-96 h-96 rounded-full"
            alt="wing-combo"
            src={img}
          />
        </div>
        <div className="flex flex-col justify-between px-10">
          <h3 className="text-4xl font-extrabold text-black">
            {product.title}
          </h3>
          <div>
            <span className="text-2xl border-b-2 border-b-orange-500 text-orange-500">
              {product.prices[0]}
            </span>
          </div>
          <p className="w-[60%] text-lg text-black">{product.description}</p>
          <div>
            <h3 className="text-2xl font-bold text-orange-500">
              Choose your flavor
            </h3>
            <div className="flex flex-row justify-between w-[60%] ">
              {product.flavors.map((flavor: any, index: number) => (
                <div className="flex flex-row items-center">
                  <input
                    className="w-6 h-6 shadow rounded-md"
                    type="checkbox"
                    id={flavor.text}
                    name={flavor.text}
                  />
                  <span key={index} className="text-lg text-black pl-2">
                    {flavor.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-orange-500">Add-ons</h3>
            <div className="flex flex-row justify-between w-[60%]">
              {product.extraOptions.map((option: any, index: number) => (
                <div key={index} className="flex flex-row items-center">
                  <input
                    className="w-6 h-6 shadow rounded-md"
                    type="checkbox"
                    id={option.text}
                    name={option.text}
                    // onChange={(e) => handleChange(e, option)}
                  />
                  <div className="pl-3">
                    <label className="pr-2 text-lg text-black">
                      {option.text}
                    </label>
                    <label className="text-lg text-black">
                      {`($${option.price.toFixed(2)})`}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
