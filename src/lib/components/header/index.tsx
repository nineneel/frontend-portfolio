'use client';
import { useState } from 'react';
import SideBar from './sidebar';
import NavBar from './navbar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full'>
      <NavBar onClick={() => setIsOpen(!isOpen)} />
      <SideBar isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </header>
  );
}
