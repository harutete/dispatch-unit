import { useState } from 'react';

export const useSelect = (initialState: string) => {
  const [selectedValue, setSelectedValue] = useState(initialState);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  return {
    selectedValue,
    onChange: handleChange,
  };
};
