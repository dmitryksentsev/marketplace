import type { ReactNode } from 'react';

import { Box, Typography } from '@mui/material';

export type ProductsTableHeaderCellProps = {
  children: ReactNode;
};

const ProductsTableHeaderCell = ({ children }: ProductsTableHeaderCellProps) => (
  <Box alignContent="center" gap="20px" height="73px" width="100%">
    <Typography
      sx={{
        color: '#B2B3B9',
      }}
      variant="h6"
    >
      {children}
    </Typography>
  </Box>
);

export default ProductsTableHeaderCell;
