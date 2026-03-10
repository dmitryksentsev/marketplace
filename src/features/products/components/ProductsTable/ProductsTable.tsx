import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import type { Product } from '../../../../types';

import { ArrowsClockwiseIcon, PlusCircleIcon } from '../../../../shared/components/icons';
import ProductsTableHeader from './ProductsTableHeader';
import ProductsTablePagination, {
  type ProductsTablePaginationProps,
} from './ProductsTablePagination';
import ProductsTableRow from './ProductsTableRow';

export type ProductsTableProps = ProductsTablePaginationProps & {
  isLoading: boolean;
  items?: Product[];
  onAddClick: () => void;
  onRefresh: () => void;
};

const ProductsTable = ({
  isLoading,
  items,
  onAddClick,
  onRefresh,
  ...paginationProps
}: ProductsTableProps) => {
  const [selection, setSelection] = useState<{ [key: number]: boolean }>({});

  const handleSelect = (checked: boolean, id: number) => {
    const newSelected = { ...selection };

    if (!checked) {
      delete newSelected[id];
    } else {
      newSelected[id] = true;
    }
    setSelection(newSelected);
  };

  const handleSelectAll = (checked: boolean) => {
    const newSelection: { [key: number]: boolean } = {};

    if (checked) {
      items?.forEach((el) => {
        newSelection[el.id] = true;
      });
    }
    setSelection(newSelection);
  };

  useEffect(()=> {
     setSelection({});
  }, [items]);


  return (
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

      <Box width="100%" minWidth="100%">
        <ProductsTableHeader
          isAllSelected={items?.length === Object.keys(selection).length}
          onSelectAll={handleSelectAll}
        />

        <Box
          alignItems="flex-start"
          display="flex"
          flexDirection="column"
          minHeight="600px"
          width="1220px"
        >
          {isLoading ? (
            <Box width="100%">
              <LinearProgress />
            </Box>
          ) : (
            <div>
              {items?.map((item) => (
                <ProductsTableRow
                  item={item}
                  key={item.id}
                  onSelect={handleSelect}
                  selected={!!selection[item.id]}
                />
              ))}
            </div>
          )}
        </Box>
      </Box>

      <ProductsTablePagination {...paginationProps} />
    </Box>
  );
};

export default ProductsTable;
