import React, { useState } from "react";

interface DropDownProps {
  label: string;
  options: string[];
  onSelect: (selected: string) => void;
  classes: string;
}

const DropDown: React.FC<DropDownProps> = ({
  label,
  options,
  onSelect,
  classes,
}) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div className={classes}>
      <label>{label}</label>
      <select value={selectedValue} onChange={handleSelect}>
        {options.map((option, index) => {
          return (
            <option value={option} key={option + index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
