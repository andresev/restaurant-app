import React from 'react';
import { Product } from '../../typings';
import img from '../../assets/img/wings-default.jpg';
import Image from 'next/image';

const WingCard = (props: Product) => {
  return (
    <div className="flex flex-row items-center p-5">
      <Image alt="wing-combo" className="w-36 h-36 rounded-full" src={img} />
      <div className="flex flex-col justify-between p-4">
        <h1 className=" text-xl font-bold text-orange-500">{props.title}</h1>
        <div>
          <span className="text-lg text-orange-500 font-thin border-b border-orange-500">{props.prices[0]}</span>
        </div>
        <p className="text-sm text-black pt-2">{props.description}</p>
      </div>
    </div>
  );
};

export default WingCard;
