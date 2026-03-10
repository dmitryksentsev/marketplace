import { createSelector, createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../app/store';

import {
  type TableColumn,
  TableColumns,
} from '../features/products/components/ProductsTable/constants';

export type ProductsState = {
  isAddProductModalVisible: boolean;
  isProductAddedToastVisible: boolean;
  page: number;
  searhQuery: string;
  sort: SortInfo;
};

export type SortDirection = 'asc' | 'desc';

export type SortInfo = {
  direction: SortDirection;
  orderBy: TableColumn;
};

const initialState: ProductsState = {
  isAddProductModalVisible: false,
  isProductAddedToastVisible: false,
  page: 1,
  searhQuery: '',
  sort: {
    direction: 'asc',
    orderBy: TableColumns.Title,
  },
};

export const productsSlice = createSlice({
  initialState,
  name: 'products',
  reducers: {
    setAddProductModalVisible(draft, { payload }: PayloadAction<boolean>) {
      draft.isAddProductModalVisible = payload;
    },
    setPage(draft, { payload }: PayloadAction<number>) {
      draft.page = payload;
    },
    setProductAddedToastVisible(draft, { payload }: PayloadAction<boolean>) {
      draft.isProductAddedToastVisible = payload;
    },
    setSearchQuery(draft, { payload }: PayloadAction<string>) {
      draft.searhQuery = payload;
      draft.page = 1;
    },
    setSortInfo(draft, { payload: { direction, orderBy } }: PayloadAction<SortInfo>) {
      draft.page = 1;
      draft.sort = {
        direction,
        orderBy,
      };
    },
  },
});

export const {
  setAddProductModalVisible,
  setPage,
  setProductAddedToastVisible,
  setSearchQuery,
  setSortInfo,
} = productsSlice.actions;

export const selectProducts = (state: RootState) => state[productsSlice.name];

export const selectPage = createSelector(selectProducts, (state) => state.page);

export const selectSortInfo = createSelector(selectProducts, (state) => state.sort);

export const selectSearchQuery = createSelector(selectProducts, (state) => state.searhQuery);

export const selectIsAddProductModalVisible = createSelector(
  selectProducts,
  (state) => state.isAddProductModalVisible
);

export const selectIsProductAddedToastVisible = createSelector(
  selectProducts,
  (state) => state.isProductAddedToastVisible
);
