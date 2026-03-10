import { Box, Button, IconButton, Typography } from '@mui/material';

import type { Product } from '../../../../types';

import Checkbox from '../../../../shared/components/Checkbox';
import { MoreIcon, PlusIcon } from '../../../../shared/components/icons';
import ProductPrice from './ProductPrice';
import ProductRating from './ProductRating';

export type ProductsTableRowProps = {
  item: Product;
  onSelect: (checked: boolean, id: number) => void;
  selected?: boolean;
};

const ProductsTableRow = ({ item, onSelect, selected }: ProductsTableRowProps) => {
  return (
    <Box
      borderBottom="1px solid #E2E2E2"
      borderTop="1px solid #E2E2E2"
      boxSizing="border-box"
      display="grid"
      gap="32px"
      gridTemplateColumns="2fr 1fr 1fr 1fr 1fr 1fr"
      minHeight="71px"
      pl={selected ? '15px' : '18px'}
      pr="18px"
      py="10px"
      sx={{ ...(selected && { borderLeft: '3px solid #3C538E' }) }}
      width="100%"
    >
      <Box alignItems="center" boxSizing="border-box" display="flex" gap="18px">
        <Checkbox
          size="small"
          checked={selected}
          key={item.id}
          onChange={(e) => {
            e.preventDefault();
            onSelect(e.target.checked, item.id);
          }}
        />

        <Box
          borderRadius="8px"
          component="img"
          height="48px"
          src={item.thumbnail}
          sx={{
            aspectRatio: 1,
            backgroundColor: '#C4C4C4',
            border: '1px solid #ECECEB',
            objectFit: 'cover',
          }}
          width="48px"
        />

        <Box
          alignItems="flex-start"
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          gap="10px"
          textAlign="start"
        >
          <Typography
            sx={{
              color: '#222222',
            }}
            variant="h6"
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: '#B2B3B9',
              fontFamily: 'Cairo, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            {item.category}
          </Typography>
        </Box>
      </Box>

      <Box alignItems="center" display="flex" justifyContent="center" width="100%">
        <Typography
          sx={{
            color: '#000000',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
          }}
        >
          {item.brand}
        </Typography>
      </Box>

      <Box alignItems="center" display="flex" justifyContent="center" width="100%">
        <Typography
          sx={{
            color: '#000000',
            fontFamily: 'Open Sans, sans-serif',
          }}
          variant="body1"
        >
          {item.sku}
        </Typography>
      </Box>

      <Box alignItems="center" display="flex" justifyContent="center" width="100%">
        {item.rating && <ProductRating rating={item.rating} />}
      </Box>

      <Box alignItems="center" display="flex" justifyContent="center" width="100%">
        {item.price && <ProductPrice price={item.price} />}
      </Box>

      <Box alignItems="center" display="flex" gap="32px" justifyContent="center" width="100%">
        <Button
          size="small"
          sx={{
            minWidth: 'unset',
            width: 52,
          }}
          variant="contained"
        >
          <PlusIcon />
        </Button>

        <IconButton sx={{ padding: '4px' }}>
          <MoreIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductsTableRow;
