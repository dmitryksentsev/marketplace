import type { TableColumn } from './features/products/components/ProductsTable/constants';
import type { SortDirection } from './store/productsSlice';

export type AddProductArgs = {
  brand: string;
  price: string;
  sku: string;
  title: string;
};

export type FetchProductsArgs = {
  orderBy?: TableColumn;
  page?: number;
  sortDirection?: SortDirection;
};

export type FetchProductsResult = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export type FetchSearchProductsArgs = FetchProductsArgs & {
  query: string;
};

export type LoginArgs = {
  password: string;
  save: boolean;
  username: string;
};

export type Product = {
  brand: string;
  category: string;
  id: number;
  price: number;
  rating: number;
  sku: string;
  thumbnail: string;
  title: string;
};
