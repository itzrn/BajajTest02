import React from 'react';

function Dropdown({ options, onChange }) {
  const handleSelectionChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    onChange(selectedOptions);
  };

  return (
    <div>
      <select multiple={true} onChange={handleSelectionChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;