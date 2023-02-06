import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    to: '/',
    icon: '🏛',
    text: ' Home'
  },
  {
    to: '/page1',
    icon: '📈 ',
    text: 'Price Checker'
  },
  {
    to: '/page2',
    icon: '✈ ',
    text: 'Send Asset'
  },
  {
    to: '/page3',
    icon: '✚ ',
    text: 'Chain Add'
  },
  {
    to: '/page4',
    icon: '⇌ ',
    text: 'Swap'
  }
]

function NewSideBarMenu() {
  return (
    <div className="bg-gray-800 h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
      <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
        {links.map((link, index) => (
          <li key={index} className="mr-3 flex-1">
            <Link
              to={link.to}
              className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:bg-indigo-400"
            >
              {link.icon} {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewSideBarMenu;
