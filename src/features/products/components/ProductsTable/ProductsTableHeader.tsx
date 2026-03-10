import { Box, TableSortLabel } from '@mui/material';
import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import Checkbox from '../../../../shared/components/Checkbox';
import { selectSortInfo, setSortInfo } from '../../../../store/productsSlice';
import { type TableColumn, TableColumns, TableColumnsLabels } from './constants';
import ProductsTableHeaderCell from './ProductsTableHeaderCell';

export type ProductsTableHeaderProps = {
  isAllSelected: boolean;
  onSelectAll: (checked: boolean) => void;
};

const ProductsTableHeader = ({ isAllSelected, onSelectAll }: ProductsTableHeaderProps) => {
  const dispatch = useAppDispatch();
  const { direction, orderBy } = useAppSelector(selectSortInfo);

  const handleChangeSort = useCallback(
    (column: TableColumn) => {
      const isDesc = orderBy === column && direction === 'asc';
      dispatch(setSortInfo({ direction: isDesc ? 'desc' : 'asc', orderBy: column }));
    },
    [dispatch, direction, orderBy]
  );

  return (
    <Box
      boxSizing="border-box"
      display="grid"
      gap="32px"
      gridTemplateColumns="2fr 1fr 1fr 1fr 1fr 1fr"
      px="18px"
      width="100%"
    >
      {Object.keys(TableColumns).map((key) => {
        const value = TableColumns[key as keyof typeof TableColumns];
        const id = TableColumnsLabels[value];
        const header = (
          <TableSortLabel
            active={orderBy === value}
            direction={orderBy === value ? direction : 'asc'}
            onClick={() => handleChangeSort(value)}
          >
            <FormattedMessage id={id} />
          </TableSortLabel>
        );

        if (key === 'Title') {
          return (
            <ProductsTableHeaderCell key={key}>
              <Box alignItems="center" display="flex" gap="20px">
                <Checkbox
                  size="small"
                  checked={isAllSelected}
                  onChange={(_, checked) => onSelectAll(checked)}
                />

                {header}
              </Box>
            </ProductsTableHeaderCell>
          );
        }

        return <ProductsTableHeaderCell key={key}>{header}</ProductsTableHeaderCell>;
      })}
    </Box>
  );
};

export default ProductsTableHeader;
