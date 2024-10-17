import React from 'react';

import { Link } from 'react-router-dom';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import saphyLogo from '../assets/Saphy_title_skyblue.svg';

function Header() {
  return (
    <nav className="text-md fixed left-0 top-0 z-50 w-full rounded-b-md bg-gray-900 p-4 text-white">
      <ul className="mx-11 flex justify-between">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex transform items-center text-white transition duration-300 ease-in-out hover:scale-110 hover:text-blue-400"
          >
            <img src={saphyLogo} alt="Saphy Logo" className="h-8" />
          </Link>
        </li>
        <li className="flex items-center space-x-6">
          <a
            href="https://github.com/2024-Saphy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub size={30} className="hover:text-lime-200" />
          </a>
          <FaYoutube size={30} className="hover:text-lime-200" />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
