import { Box, Pagination, PaginationItem, Typography } from '@mui/material';
import { type ChangeEvent, type ReactNode, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { CaretLeftIcon, CaretRightIcon } from '../../../../shared/components/icons';
import { selectPage, setPage } from '../../../../store/productsSlice';

export type ProductsTablePaginationProps = {
  limit?: number;
  total?: number;
};

const ProductsTablePagination = ({ limit = 1, total = 0 }: ProductsTablePaginationProps) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);

  const handleChangePage = (_: ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
  };

  const pageNum = useMemo(() => Math.ceil(total / limit), [total, limit]);

  const intervalStart = useMemo(() => (page - 1) * limit, [page, limit]);

  const intervalEnd = useMemo(
    () => (page === pageNum ? total : intervalStart + limit),
    [page, pageNum, total, intervalStart, limit]
  );

  return (
    <Box alignItems="center" display="flex" height="52px" justifyContent="space-between">
      <div>
        <Typography sx={{ color: '#969B9F', fontFamily: 'Roboto Mono, monospace' }}>
          <FormattedMessage
            id="products.table.pagination.info"
            values={{
              black: (children: ReactNode) => (
                <Box component="span" sx={{ color: '#333333' }}>
                  {children}
                </Box>
              ),
              interval: total === 0 ? 0 : `${intervalStart + 1}-${intervalEnd}`,
              total,
            }}
          />
        </Typography>
      </div>

      <Pagination
        count={pageNum}
        onChange={handleChangePage}
        page={page}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              next: CaretRightIcon,
              previous: CaretLeftIcon,
            }}
            {...item}
          />
        )}
        shape="rounded"
        sx={{
          marginRight: '-12px',
        }}
        variant="outlined"
      />
    </Box>
  );
};

export default ProductsTablePagination;
