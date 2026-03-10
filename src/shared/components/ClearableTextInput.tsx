import type { ChangeEvent } from 'react';

import { IconButton, InputAdornment, TextField, type TextFieldProps } from '@mui/material';

import { ClearIcon } from './icons';

export type ClearableTextInputProps = TextFieldProps & {
  onClear: () => void;
};

const ClearableTextInput = ({ onChange, slotProps, value, ...props }: ClearableTextInputProps) => {
  const handleClear = () => {
    onChange?.({
      target: {
        value: '',
      },
    } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <TextField
      {...props}
      onChange={onChange}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          endAdornment: value ? (
            <InputAdornment position="end">
              <IconButton
                disableFocusRipple
                onClick={handleClear}
                size="small"
                sx={{
                  padding: 0,
                }}
              >
                <ClearIcon sx={{ color: '#c9c9c9', height: '16px', width: '14px' }} />
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
      }}
      value={value}
    />
  );
};

export default ClearableTextInput;
