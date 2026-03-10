export const TableColumns = {
  Title: 'title',
  Brand: 'brand',
  Sku: 'sku',
  Rating: 'rating',
  Price: 'price',
} as const;

export type TableColumn = (typeof TableColumns)[keyof typeof TableColumns];

export const TableColumnsLabels = {
  [TableColumns.Title]: 'products.table.header.name',
  [TableColumns.Brand]: 'products.table.header.vendor',
  [TableColumns.Sku]: 'products.table.header.article',
  [TableColumns.Price]: 'products.table.header.price',
  [TableColumns.Rating]: 'products.table.header.rating',
};
