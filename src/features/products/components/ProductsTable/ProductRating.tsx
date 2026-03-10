import { Box, Typography } from '@mui/material';

export type ProductRatingProps = {
  rating: number;
};

const ProductRating = ({ rating }: ProductRatingProps) => {
  return (
    <Typography
      sx={{
        color: '#000000',
        fontFamily: 'Open Sans, sans-serif',
      }}
      variant="body1"
    >
      <Box
        component="span"
        sx={{
          color: rating < 3 ? '#F11010' : '#000000',
        }}
      >
        {' '}
        {rating}
      </Box>
      /5
    </Typography>
  );
};

export default ProductRating;
