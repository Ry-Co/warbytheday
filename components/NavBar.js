import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Link from 'next/link'

const NavBar = () => {
  const [value, setValue] = useState(true);

  return (
    <nav className=" shadow-xl bg-gray-100 drop-shadow-md font-mono flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6  sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 inner">
      <Link href="/">
        <a
          href="/"
          className="text-4xl no-underline text-grey-darkest hover:text-blue-dark font-mono font-bold"
        >
          War by the day
        </a>
        </Link>
        <br></br>
        <span className="text-sm text-grey-dark">History in real time</span>
      </div>

      <div className="sm:mb-0 self-center">
        <Link href="/">
        <a
          href="/"
          className="text-lg no-underline text-black hover:text-blue-dark ml-2 px-1"
        >
          Home
        </a>
        </Link>
        <Link href="/about">
        <a
          href="/about"
          className="text-lg no-underline text-black hover:text-blue-dark ml-2 px-1"
        >
          About
        </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
