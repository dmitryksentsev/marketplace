import { IconButton, InputAdornment, TextField, type TextFieldProps } from '@mui/material';
import { useState } from 'react';

import { EyeOffIcon, LockIcon } from './icons';

const PasswordInput = ({ slotProps, ...props }: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleChangeShow = () => setShowPassword(!showPassword);

  return (
    <TextField
      {...props}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disableFocusRipple
                onClick={handleChangeShow}
                size="small"
                sx={{
                  padding: 0,
                }}
              >
                <EyeOffIcon height="24px" sx={{ color: '#EDEDED' }} width="24px" />
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon
                height="24px"
                sx={{
                  color: '#EDEDED',
                }}
                width="24px"
              />
            </InputAdornment>
          ),
        },
      }}
      type={showPassword ? 'text' : 'password'}
    />
  );
};

export default PasswordInput;
