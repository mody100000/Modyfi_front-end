import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...rest}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        name={name}
        id={name}
      />
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          // role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
