import React from 'react';
import WingCard from './WingCard';
import { ProductListProps } from './props_WingList';

const WingList = ({ productData }: ProductListProps) => {
  console.log(productData);
  return (
    <div>
      {productData.map((item) => (
        <WingCard
          _id={item._id}
          key={item._id}
          title={item.title}
          prices={item.prices}
          description={item.description}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default WingList;
