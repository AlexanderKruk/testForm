import React from 'react';

const Checkbox = ({ name, register, text }) => {
  return (
    <div className="flex ml-1">
      <input
        {...register(name)}
        type="checkbox"
        id={name}
        name={name}
        data-testid={name}
        className="mr-[11px] scale-150"
      />
      <label htmlFor={name} className="">
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
