import React from 'react';
import ErrorIcon from '../icons/ErrorIcon';

const Input = ({ name, errors, register }) => {
  return (
    <div>
      <label htmlFor={name} className="text-xl font-bold leading-[23px]">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        {...register(name)}
        className={`${
          errors[name] ? 'border-red' : 'border-[#35694F]'
        } border-[#35694F] border-[1.5px] rounded-[5px] 
        h-[55px] w-[350px] shadow-custom
        focus:border-[3px] focus:outline-none text-2xl mt-[13px]`}
        type="text"
        id={name}
        name={name}
        data-testid={name}
      />
      <div
        data-testid={`${name}-error`}
        className="text-[15px] leading-[18px] text-red flex mt-1 h-[30px]"
      >
        {errors[name] && (
          <>
            <ErrorIcon />
            <div className="leading-5 ml-[3px]">{errors[name].message}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
