// 'use client';
import React, { use } from 'react';
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

const ProductPage = ({ params: { productId } }: PageProps) => {
  // const [sauce, setSauces] = useState(0);

  // const handleChange = (e: any, option: any) => {
  //   const checked = e.target.checked;

  //   if (checked) {
  //   }
  // };

  // Database variable
  const product = use(getProduct(productId));
  return (
    <div className="h-full w-full bg-[#f8dcc9]">
      <Image className="w-24 h-24" alt="wing-combo" src={img} />
      <h3 className="text-2xl text-black">{product.title}</h3>
      <span className="">{product.prices[0]}</span>
      <p className="">{product.description}</p>
      <div>
        <h3 className="">
          Choose your flavor ({`${product.flavors[0].limit}`})
        </h3>
        {product.flavors.map((items: any, index: number) => (
          <div className="" key={index}>
            {items.text.map((flavor: string, index: number) => (
              <div key={index} className="">
                <input className="" type="checkbox" id={flavor} name={flavor} />
                <span key={index} className="">
                  {flavor}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <h3 className="">Add-ons</h3>
        {product.extraOptions.map((option: any, index: number) => (
          <div key={index} className="">
            <input
              className=""
              type="checkbox"
              id={option.text}
              name={option.text}
              // onChange={(e) => handleChange(e, option)}
            />
            <label className="">{option.text}</label>
            <label className="">{`($${option.price.toFixed(2)})`}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
