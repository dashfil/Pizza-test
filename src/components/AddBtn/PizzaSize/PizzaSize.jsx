import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './PizzaSize.css'

export default function PizzaSize({ alignment,setAlignment }) {
 

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="23" className='size-btn'>23 см</ToggleButton>
      <ToggleButton value="30" className='size-btn'>30 см</ToggleButton>
      <ToggleButton value="35" className='size-btn'>35 см</ToggleButton>
    </ToggleButtonGroup>
  );
}
