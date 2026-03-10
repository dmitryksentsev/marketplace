import { InputAdornment } from '@mui/material';
import debounce from 'lodash.debounce';
import { type ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';

import { useAppDispatch } from '../../../app/hooks';
import ClearableTextInput from '../../../shared/components/ClearableTextInput';
import SearchIcon from '../../../shared/components/icons/SearchIcon';
import { setSearchQuery } from '../../../store/productsSlice';

const ProductSearchTextField = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState('');

  const handleSearchInStoreChange = useCallback(
    (q: string) => {
      dispatch(setSearchQuery(q));
    },
    [dispatch]
  );

  const debouncedChangeHandler = useMemo(() => {
    return debounce(handleSearchInStoreChange, 500);
  }, [handleSearchInStoreChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debouncedChangeHandler(e.target.value);
  };

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  return (
    <ClearableTextInput
      fullWidth
      onChange={handleChange}
      placeholder={intl.formatMessage({ id: 'products.searhField.placeholder' })}
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon height="24px" sx={{ color: '#999999' }} width="24px" />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        backgroundColor: '#F3F3F3',
        borderColor: '#CFCFCF',
        borderRadius: '8px',
      }}
      value={searchValue}
    />
  );
};

export default ProductSearchTextField;
