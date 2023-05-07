import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = (): JSX.Element => {
  const [nav, setNav] = useState(false);
  const [opacity, setOpacity] = useState(0.6);

  const handleNav = (): void => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = (): void => {
      if (window.scrollY >= 90) {
        setOpacity(1);
      } else {
        setOpacity(0.6);
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ opacity: `${opacity}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-black">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <a href="/">
          <img
            className="h-auto max-w-full"
            src={'/images/arcadieTitreBarreNavigation.png'}
            alt="Logo Atelier Arcadie"
          />
        </a>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <a href="/">Home</a>
          </li>
          <li className="p-4">
            <a href="/coffrets">Coffrets et Présentoirs</a>
          </li>
          <li className="p-4">
            <a href="/materiaux">Matériaux et Fabrication</a>
          </li>
          <li className="p-4">
            <a href="/arcadie">Arcadie ?</a>
          </li>
          <li className="p-4">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }>
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <a href="/">Home</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <a href="/coffrets">Coffrets et Présentoirs</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <a href="/materiaux">Matériaux et Fabrication</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <a href="/arcadie">Arcadie ?</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
