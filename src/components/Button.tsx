import React from 'react';

interface ButtonProps {
  color: string;
  children: any;
}

export default function Button({ color, children }: ButtonProps) {
  return <button className={`text-lg w-32 cursor-pointer rounded py-2 px-4 mb-4 ${color}`}>{children}</button>;
}
