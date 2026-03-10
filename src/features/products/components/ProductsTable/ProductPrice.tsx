import { Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

export type ProductPriceProps = {
  price: number;
};
const ProductPrice = ({ price }: ProductPriceProps) => {
  const intl = useIntl();
  const formatted = intl.formatNumberToParts(price, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
  const decimalIndex = formatted.findIndex((el) => el.type === 'decimal');
  const integer = formatted
    .slice(0, decimalIndex)
    .map((el) => el.value)
    .join('');
  const fraction = formatted
    .slice(decimalIndex)
    .map((el) => el.value)
    .join('');

  return (
    <Typography
      sx={{
        fontFamily: 'Roboto Mono, monospace',
      }}
    >
      {' '}
      {integer}
      <Box component="span" sx={{ color: '#999999' }}>
        {fraction}
      </Box>
    </Typography>
  );
};

export default ProductPrice;
