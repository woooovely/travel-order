import React from "react";

interface OptionProps {
  name: string;
  updateItemCount: (name: string, checked: number) => any;
}

const Options = ({ name, updateItemCount }: OptionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked ? 1 : 0;
    updateItemCount(name, checked);
  };

  return (
    <form>
      <input type="checkbox" id={`${name} option`} onChange={handleChange} />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options


