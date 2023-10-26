import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      className="text-white hover:bg-light-green active:bg-dark-green 
      text-[18px] font-bold border-green bg-green h-[55px] 
      w-[199px] shadow-custom border-[1.5px] rounded-[5px] mt-[58px]"
    >
      {children}
    </button>
  );
};

export default Button;
