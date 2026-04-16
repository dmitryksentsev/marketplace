import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  AddProductModal,
  ProductAddedToast,
  ProductSeachTextField,
} from '../features/products/components';
import { ProductsTable } from '../features/products/components/ProductsTable';
import { useGetProductsQuery, useSearchProductsQuery } from '../store/productsApi';
import {
  selectIsAddProductModalVisible,
  selectPage,
  selectSearchQuery,
  selectSortInfo,
  setAddProductModalVisible,
} from '../store/productsSlice';
import ProductTableButtons from '../features/products/components/ProductsTable/ProductTableButtons';
import ProductsTablePagination from '../features/products/components/ProductsTable/ProductsTablePagination';

const Products = () => {
  const dispatch = useAppDispatch();

  const { direction, orderBy } = useAppSelector(selectSortInfo);
  const query = useAppSelector(selectSearchQuery);
  const page = useAppSelector(selectPage);
  const isModalVisible = useAppSelector(selectIsAddProductModalVisible);

  const useSearchAPI = useMemo(() => !!query, [query]);

  const { data, isFetching, refetch } = useGetProductsQuery(
    { orderBy, page, sortDirection: direction },
    { skip: useSearchAPI }
  );

  const {
    data: searchData,
    isFetching: searchIsFetching,
    refetch: searchRefetch,
  } = useSearchProductsQuery(
    { orderBy, page, query, sortDirection: direction },
    { skip: !useSearchAPI }
  );

  const showModal = () => {
    dispatch(setAddProductModalVisible(true));
  };

  const hideModal = () => {
    dispatch(setAddProductModalVisible(false));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      pb="30px"
      pt="20px"
      sx={{
        background: '#ededed',
      }}
      width="100%"
    >
      <Box
        alignItems="center"
        display="flex"
        gap="146px"
        height="100px"
        px="30px"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <div>
          <Typography
            sx={{
              color: '#202020',
            }}
            variant="h3"
          >
            <FormattedMessage id="products.products" />
          </Typography>
        </div>

        <Box maxWidth={1023} width="100%">
          <ProductSeachTextField />
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap="40px"
        px="30px"
        py="30px"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <ProductTableButtons
          onAddClick={showModal}
          onRefresh={useSearchAPI ? searchRefetch : refetch}
        />

        <ProductsTable
          isLoading={isFetching || searchIsFetching}
          items={useSearchAPI ? searchData?.products : data?.products}
        />

        <ProductsTablePagination
          limit={20}
          total={useSearchAPI ? searchData?.total : data?.total}
        />
      </Box>

      <ProductAddedToast />

      <AddProductModal onClose={hideModal} open={isModalVisible} />
    </Box>
  );
};

export default Products;
