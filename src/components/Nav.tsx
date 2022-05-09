import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface NavProps {
  title: string;
}

function Nav({ title = '' }: NavProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full top-0 sticky bg-white z-20">
      <div className="w-full flex items-center justify-between h-12 px-4">
        <IoIosArrowBack onClick={() => navigate(-1)} size="1.5rem" />
        <h1>{title}</h1>
        <IoIosArrowBack className="invisible" size="1.5rem" />
      </div>
    </div>
  );
}

export default Nav;
