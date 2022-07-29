import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './Dough.css'

export default function Dough({ dough, setDough }) {
  

  const handleChange = (event, newAlignment) => {
    setDough(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={dough}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="Тонкое" className='dough-bnt'>Тонкое</ToggleButton>
      <ToggleButton value="Традиционное" className='dough-bnt'>Традиционное</ToggleButton>
      <ToggleButton value="Ультратонкое" className='dough-bnt'>Ультратонкое</ToggleButton>
    </ToggleButtonGroup>
  );
}
