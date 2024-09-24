import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // or './styles.css'

const Navbar = () => {
  return (
    <nav className="fixed bottom-5 w-full flex justify-center z-50">
      <ul className="bg-[#33333396] text-white flex space-x-8 px-10 py-3 rounded-2xl shadow-lg">
        <li className="cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400"
          >
            HOME
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400"
          >
            ABOUT
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400"
          >
            WORK
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
