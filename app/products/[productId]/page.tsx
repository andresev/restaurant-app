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
    <div className="flex-1 h-screen w-screen bg-[#f8dcc9]">
      <Image className="w-36 h-36 rounded-full" alt="wing-combo" src={img} />
      <h3 className="text-black">{product.title}</h3>
      <span className="">{product.prices[0]}</span>
      <p className="w-[60%] text-lg text-black">{product.description}</p>
      <div>
        <h3 className="text-2xl font-bold text-orange-500">
          Choose your flavor ({`${product.flavors[0].limit}`})
        </h3>
        {product.flavors.map((items: any, index: number) => (
          <div className="" key={index}>
            {items.text.map((flavor: string, index: number) => (
              <div key={index} className="">
                <input
                  className="w-4 h-4 shadow rounded-sm"
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
      <div>
        <h3 className="text-xl font-bold text-orange-500">Add-ons</h3>
        {product.extraOptions.map((option: any, index: number) => (
          <div key={index} className="flex flex-row">
            <input
              className="w-4 h-4 shadow rounded-sm"
              type="checkbox"
              id={option.text}
              name={option.text}
              // onChange={(e) => handleChange(e, option)}
            />
            <label className="pr-2 text-lg text-black">{option.text}</label>
            <label className="text-lg text-black">
              {`($${option.price.toFixed(2)})`}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
