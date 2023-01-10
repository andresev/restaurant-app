import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/wing-town-logo.png';
import { AiOutlineShoppingCart, AiOutlinePhone } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="flex justify-between bg-[#d14525] h-24">
      <div className="flex justify-start items-center pl-12 w-[20%] ">
        <div className="p-1 bg-[#fff] rounded-3xl">
          <AiOutlinePhone className="h-10 w-10 text-[#d14525]" />
        </div>
        <div className="ml-5">
          <p className="text-sm">ORDER NOW!</p>
          <p className="text-lg font-bold">956-754-7271</p>
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center w-[60%] bg-[#d14525]">
        <Link href="/">Home</Link>
        <Link href="/">Menu</Link>
        {/* <h1 className="text-2xl">Restaurant</h1> */}
        <Image alt="wing-town-logo" className="w-72" src={logo} />
        <Link href="/">About Us</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="flex justify-end items-center w-[20%] pr-12">
        <AiOutlineShoppingCart className="h-8 w-8" />
      </div>
    </header>
  );
};

export default Header;
