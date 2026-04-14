import { IconButton, InputAdornment, TextField, type TextFieldProps } from '@mui/material';
import { ClearIcon } from './icons';
import type { ChangeEvent } from 'react';

export type ClearableTextInputProps = TextFieldProps;

const ClearableTextInput = ({ value, slotProps, onChange, ...props }: ClearableTextInputProps) => {
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
      value={value}
      onChange={onChange}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          endAdornment: value ? (
            <InputAdornment position="end">
              <IconButton
                size="small"
                disableFocusRipple
                sx={{
                  padding: 0,
                }}
                onClick={handleClear}
              >
                <ClearIcon sx={{ color: '#c9c9c9', width: '14px', height: '16px' }} />
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
      }}
    />
  );
};

export default ClearableTextInput;
