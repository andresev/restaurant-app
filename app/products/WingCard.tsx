import React from 'react';
import { Product } from '../../typings';
import img from '../../assets/img/wings-default.jpg';
import Link from 'next/link';
import Image from 'next/image';

const WingCard = (props: Product) => {
  return (
    <div className="flex flex-row p-10">
      <Image
        alt="wing-combo"
        className="rounded-full"
        width={120}
        height={100}
        src={img}
      />
      <div className="flex flex-col justify-between p-5">
        <h1 className=" text-2xl font-bold">{props.title}</h1>
        <div>
          <span className="text-lg font-thin border-b">{props.prices[0]}</span>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default WingCard;
