import { Box, Button, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { ArrowsClockwiseIcon, PlusCircleIcon } from '../../../../shared/components/icons';

export type ProductTableButtonsProps = {
  onRefresh: () => void;
  onAddClick: () => void;
};

const ProductTableButtons = ({ onRefresh, onAddClick }: ProductTableButtonsProps) => (
  <Box alignItems="center" display="flex" height="42px" justifyContent="space-between">
    <Typography
      sx={{
        color: '#333333',
      }}
      variant="h4"
    >
      <FormattedMessage id="products.table.allPositions" />
    </Typography>

    <Box alignItems="center" display="flex" gap="8px" sx={{ color: '#ECECEB' }}>
      <Button
        color="inherit"
        onClick={onRefresh}
        sx={{
          minWidth: 'unset',
          padding: 0,
          width: '42px',
        }}
        variant="outlined"
      >
        <ArrowsClockwiseIcon
          height="22px"
          sx={{
            color: '#515161',
          }}
          width="22px"
        />
      </Button>

      <Button onClick={onAddClick} variant="contained">
        <Box display="flex" gap="15px">
          <PlusCircleIcon height="22px" width="22px" />

          <FormattedMessage id="products.table.addButton" />
        </Box>
      </Button>
    </Box>
  </Box>
);

export default ProductTableButtons;
