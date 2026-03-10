import { Alert, Snackbar } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  selectIsProductAddedToastVisible,
  setProductAddedToastVisible,
} from '../../../store/productsSlice';

const ProductAddedToast = () => {
  const dispatch = useAppDispatch();

  const isToastVisible = useAppSelector(selectIsProductAddedToastVisible);

  const handleClose = () => {
    dispatch(setProductAddedToastVisible(false));
  };

  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      autoHideDuration={5000}
      onClose={handleClose}
      open={isToastVisible}
    >
      <Alert onClose={handleClose} severity="success" sx={{ opacity: 0.3 }} variant="filled">
        <FormattedMessage id="products.addProductToast.productAdded" />
      </Alert>
    </Snackbar>
  );
};

export default ProductAddedToast;
