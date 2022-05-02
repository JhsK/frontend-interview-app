import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

function Nav({ title = '' }) {
  return (
    <div className="w-full top-0 sticky bg-white z-20">
      <div className="w-full flex items-center justify-between h-12">
        <IoIosArrowBack />
        <h1>{title}</h1>
        <span className="invisible" />
      </div>
    </div>
  );
}

export default Nav;
