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
    <div className="flex-1 bg-[#f8dcc9]">
      <div className="">
        <Image className="w-36 h-36 rounded-full" alt="wing-combo" src={img} />
        <div className="">
          <h3 className="text-black">{product.title}</h3>
          <div>
            <span className="">{product.prices[0]}</span>
          </div>
          <p className="w-[60%] text-lg text-black">{product.description}</p>
          <div>
            <h3 className="text-2xl font-bold text-orange-500">
              Choose your flavor ({`${product.flavors[0].limit}`})
            </h3>
            <div className="flex flex-row justify-between w-[60%] ">
              {product.flavors.map((items: any, index: number) => (
                <div className="flex flex-col justify-between" key={index}>
                  {items.text.map((flavor: string, index: number) => (
                    <div key={index} className="flex flex-row items-center">
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
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-500">Add-ons</h3>
            <div className="flex flex-row">
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
