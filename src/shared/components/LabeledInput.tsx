import type { ReactNode } from 'react';

import { Box, Typography } from '@mui/material';

export type LabeledInputProps = {
  children: ReactNode;
  label: ReactNode;
};
const LabeledInput = ({ children, label }: LabeledInputProps) => (
  <Box
    alignItems="start"
    display="flex"
    flexDirection="column"
    gap="6px"
    justifyContent="center"
    width="100%"
  >
    <Typography fontSize="18px" fontWeight={500} letterSpacing="-0.27px" lineHeight="150%">
      {label}
    </Typography>

    <Box width="100%">{children}</Box>
  </Box>
);

export default LabeledInput;
