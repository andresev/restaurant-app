import React from 'react';
import Link from 'next/link';

interface PageProps {
  isOpen: Boolean;
}

const Menu = (props: PageProps) => {
  return (
    <>
      {props.isOpen ? (
        <div className="absolute flex flex-col justify-between p-5 w-[50%] h-60 bg-[#d14525] duration-500 translate-x-0">
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Menu</Link>
          <Link href={'/'}>About Us</Link>
          <Link href={'/'}>Contact</Link>
        </div>
      ) : (
        <div className="absolute flex flex-col justify-between p-5 w-[50%] h-60 bg-[#d14525] duration-500 translate-x-[-100%]">
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Menu</Link>
          <Link href={'/'}>About Us</Link>
          <Link href={'/'}>Contact</Link>
        </div>
      )}
    </>
  );
};

export default Menu;
