import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/wing-town-logo.png';
import {
  AiOutlineShoppingCart,
  AiOutlinePhone,
  AiOutlineMenu,
} from 'react-icons/ai';
import MenuButton from './components/MenuButton';

const Header = () => {
  return (
    <header className="flex justify-between bg-[#d14525] h-16">
      <div className="flex justify-start items-center w-[20%]">
        <MenuButton />
        {/* <AiOutlineMenu className="w-8 h-8 text-white" /> */}
        <div className="ml-2">
          <p className="invisible">ORDER NOW!</p>
          <p className="invisible">956-754-7271</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-[60%] bg-[#d14525]">
        <Link className="invisible absolute disabled:opacity-0" href="/">
          Home
        </Link>
        <Link className="invisible absolute disabled:opacity-0" href="/">
          Menu
        </Link>
        <Link href={'/'}>
          <Image alt="wing-town-logo" className="h-103 w-40" src={logo} />
        </Link>
        <Link className="invisible absolute disabled:opacity-0" href="/">
          About Us
        </Link>
        <Link className="invisible absolute disabled:opacity-0" href="/">
          Contact
        </Link>
      </div>
      <div className="flex justify-end items-center pr-5 w-[20%]">
        <AiOutlineShoppingCart className="h-8 w-8" />
      </div>
    </header>
  );
};

export default Header;
