import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductoState } from './producto.state';

export const selectProductoState = createFeatureSelector<ProductoState>('productos');

export const selectAllProductos = createSelector(
  selectProductoState,
  (state: ProductoState) => state.listaProductos
);

export const selectProductosLoading = createSelector(
  selectProductoState,
  (state: ProductoState) => state.loading
);

export const selectProductosError = createSelector(
  selectProductoState,
  (state: ProductoState) => state.error
);
