import { ChangeEvent } from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (value: string) => void;
}

const Dropdown = ({ options, onSelect }: DropdownProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <select className='dropdown' onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
