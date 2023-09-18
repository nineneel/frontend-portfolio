'use client';
import { useState } from 'react';
import NavBar from './navbar';
import SideBar from './sidebar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed top-0 w-full'>
      <NavBar onClick={() => setIsOpen(!isOpen)} />
      <SideBar isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </header>
  );
}
