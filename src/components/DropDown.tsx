import React, { useState } from "react";

interface DropDownProps {
  label: string;
  options: string[];
  onSelect: (selected: string) => void;
  defaultValue: string;
  classes: string;
}

const DropDown: React.FC<DropDownProps> = ({
  label,
  options,
  onSelect,
  defaultValue = "",
  classes,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <>
      <div className={classes}>
        <label>{label}</label>
        <select value={selectedValue} onSelect={handleSelect}>
          {defaultValue && <option value={defaultValue}>{defaultValue}</option>}
          {options.map((option, index) => {
            return (
              <option value={option} key={option + index}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default DropDown;
