import { Box, Button, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import type { AddProductArgs } from '../../../types';

import { useAppDispatch } from '../../../app/hooks';
import ClearableTextInput from '../../../shared/components/ClearableTextInput';
import LabeledInput from '../../../shared/components/LabeledInput';
import { useAddProductMutation } from '../../../store/productsApi';
import { setProductAddedToastVisible } from '../../../store/productsSlice';

export type AddProductFormProps = {
  onClose: () => void;
};

const AddProductForm = ({ onClose }: AddProductFormProps) => {
  const dispatch = useAppDispatch();

  const [addProduct, { error, isError, isLoading }] = useAddProductMutation();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<AddProductArgs>({
    defaultValues: {
      brand: '',
      price: '',
      sku: '',
      title: '',
    },
  });

  const onSubmit = (data: AddProductArgs) => {
    // dispatch(login);
    addProduct(data).then(() => {
      dispatch(setProductAddedToastVisible(true));
      onClose();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        alignItems="start"
        display="flex"
        flexDirection="column"
        gap="40px"
        justifyContent="center"
      >
        {isError && (
          <Typography color="error" textAlign="start">
            <FormattedMessage
              id="login.errorHappend"
              values={{
                error: JSON.stringify(error),
              }}
            />
          </Typography>
        )}

        <Box display="flex" flexDirection="column" gap="16px" mt="16px" width="100%">
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <LabeledInput
                label={<FormattedMessage id="products.addProductModal.productFields.title" />}
              >
                <ClearableTextInput
                  fullWidth
                  {...field}
                  error={!!errors?.title}
                  helperText={
                    errors?.title ? (
                      <FormattedMessage id="login.validation.fieldIsRequired" />
                    ) : null
                  }
                />
              </LabeledInput>
            )}
            rules={{ required: true }}
          />

          <Controller
            control={control}
            name="brand"
            render={({ field }) => (
              <LabeledInput
                label={<FormattedMessage id="products.addProductModal.productFields.vendor" />}
              >
                <ClearableTextInput
                  fullWidth
                  {...field}
                  error={!!errors?.brand}
                  helperText={
                    errors?.brand ? (
                      <FormattedMessage id="login.validation.fieldIsRequired" />
                    ) : null
                  }
                />
              </LabeledInput>
            )}
            rules={{ required: true }}
          />

          <Controller
            control={control}
            name="sku"
            render={({ field }) => (
              <LabeledInput
                label={<FormattedMessage id="products.addProductModal.productFields.article" />}
              >
                <ClearableTextInput
                  fullWidth
                  {...field}
                  error={!!errors?.sku}
                  helperText={
                    errors?.sku ? <FormattedMessage id="login.validation.fieldIsRequired" /> : null
                  }
                />
              </LabeledInput>
            )}
            rules={{ required: true }}
          />

          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <LabeledInput
                label={<FormattedMessage id="products.addProductModal.productFields.price" />}
              >
                <ClearableTextInput
                  fullWidth
                  {...field}
                  error={!!errors?.price}
                  helperText={
                    errors?.price ? (
                      <FormattedMessage id="login.validation.fieldIsRequired" />
                    ) : null
                  }
                  onChange={(e) => {
                    const val = e.target.value;
                    const cleanValue = val.replace(',', '.');

                    if (/^\d+\.?\d{0,2}$/.test(cleanValue) || cleanValue === '') {
                      field.onChange(cleanValue);
                    }
                  }}
                />
              </LabeledInput>
            )}
            rules={{ required: true }}
          />
        </Box>

        <Box display="flex" gap="8px" justifyContent="flex-end" width="100%">
          <Button onClick={onClose} variant="outlined">
            <FormattedMessage id="products.addProductModal.buttons.cancel" />
          </Button>

          <Button loading={isLoading} type="submit" variant="contained">
            <FormattedMessage id="products.addProductModal.buttons.add" />
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AddProductForm;
