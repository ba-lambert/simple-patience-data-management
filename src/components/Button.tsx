import React from 'react';

type Title = string;

interface ButtonProps {
  title: Title;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <div className='flex justify-end px-10'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {title}
      </button>
    </div>
  );
}

export default Button;
