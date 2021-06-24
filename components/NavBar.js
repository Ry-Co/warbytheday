import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const NavBar = () => {
  const [value, setValue] = useState(true);

  return (
    <nav class=" bg-gray-100 drop-shadow-md font-mono flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6  shadow sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0 inner  ">
        <a
          href="/"
          class="text-4xl no-underline text-grey-darkest hover:text-blue-dark font-mono font-bold"
        >
          War by the day
        </a>
        <br></br>
        <span class="text-sm text-grey-dark">History in real time</span>
      </div>

      <div class="sm:mb-0 self-center">
        <a
          href="#"
          class="text-lg no-underline text-black hover:text-blue-dark ml-2 px-1"
        >
          Home
        </a>
        <a
          href="#"
          class="text-lg no-underline text-black hover:text-blue-dark ml-2 px-1"
        >
          About
        </a>
       
      </div>
    </nav>
  );
};

export default NavBar;
