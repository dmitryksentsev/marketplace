import { Box, LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';

import type { Product } from '../../../../types';

import ProductsTableHeader from './ProductsTableHeader';

import ProductsTableRow from './ProductsTableRow';

export type ProductsTableProps = {
  isLoading: boolean;
  items?: Product[];
};

const ProductsTable = ({ isLoading, items }: ProductsTableProps) => {
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

  useEffect(() => {
    setSelection({});
  }, [items]);

  return (
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
  );
};

export default ProductsTable;
