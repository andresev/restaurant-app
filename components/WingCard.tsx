import React from 'react';
import { Product } from './props_WingList';
import img from '../assets/img/wings-default.jpg';
import Link from 'next/link';
import Image from 'next/image';

const WingCard = (props: Product) => {
  console.log(props._id);
  return (
    <div className="flex flex-row p-10">
      <Link href={`/product/${props._id}`}>
        <Image
          alt="wing-combo"
          className="rounded-full"
          width={120}
          height={100}
          src={img}
        />
      </Link>
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
