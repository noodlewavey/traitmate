import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Singleselect({ value, setValue, option1, option2, label }) {

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{width:"300px"}}>
      <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value={option1} control={<Radio />} label={option1} />
        <FormControlLabel value={option2} control={<Radio />} label={option2} />
      </RadioGroup>
    </FormControl>
  );
}
