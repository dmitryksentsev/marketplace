import { Dialog, DialogContent, type DialogProps, DialogTitle, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import AddProductForm from '../forms/AddProductForm';

export type AddProductModalProps = Omit<DialogProps, 'children' | 'onClose'> & {
  onClose: () => void;
};

const AddProductModal = ({ onClose, ...props }: AddProductModalProps) => {
  const handleClose: DialogProps['onClose'] = (_, reason) => {
    if (reason !== 'backdropClick') {
      onClose();
    }
  };

  return (
    <Dialog
      fullWidth
      {...props}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'transparent',
          },
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h3">
          <FormattedMessage id="products.addProductModal.title" />
        </Typography>
      </DialogTitle>

      <DialogContent>
        <AddProductForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
