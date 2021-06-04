import React, { FC, useCallback } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select as MaterialSelect,
} from "@material-ui/core";

interface Props {
  label: string;
  value?: string;
  options: string[];
  onChange: (newValue: string) => void;
}

const Selector: FC<Props> = ({ value, label, options, onChange }) => {
  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <MaterialSelect
          labelId={label}
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={""}>{"Clear Selection"}</MenuItem>
          {options.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </MaterialSelect>
      </FormControl>
    </Box>
  );
};

export { Selector };
