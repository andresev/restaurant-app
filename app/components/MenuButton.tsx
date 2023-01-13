'use client';
import React, { useState } from 'react';
import {
  AiOutlineShoppingCart,
  AiOutlinePhone,
  AiOutlineMenu,
} from 'react-icons/ai';
import Menu from './Menu';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <AiOutlineMenu
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 text-white ml-5 my-3"
      />
      <Menu isOpen={isOpen} />
    </div>
  );
};

export default MenuButton;
