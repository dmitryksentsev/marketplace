import { type CheckboxProps, Checkbox as MuiCheckbox } from '@mui/material';

import { CheckedIcon, UncheckedIcon } from './icons';

const Checkbox = (props: CheckboxProps) => (
  <MuiCheckbox
    {...props}
    checkedIcon={
      <CheckedIcon
        sx={{
          color: '#B2B3B9',
        }}
        width="100%"
        height="100%"
      />
    }
    disableRipple={true}
    icon={
      <UncheckedIcon
        sx={{
          color: '#B2B3B9',
        }}
        width="100%"
        height="100%"
      />
    }
    size="small"
  />
);

export default Checkbox;
