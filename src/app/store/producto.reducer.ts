import { createReducer, on } from '@ngrx/store';
import { ProductoActions } from './producto.actions';
import { ProductoState } from './producto.state';

export const initialState: ProductoState = {
  listaProductos: [],
  loading: false,
  error: null,
};

export const productoReducer = createReducer(
  initialState,
  on(ProductoActions.cargarProductos, state => ({
    ...state,
    loading: true,
  })),
  on(ProductoActions.cargarProductosSuccess, (state, { productos }) => ({
    ...state,
    loading: false,
    listaProductos: productos,
  })),
  on(ProductoActions.cargarProductosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ProductoActions.crearProducto, state => ({
    ...state,
    loading: true,
  })),
  on(ProductoActions.crearProductoSuccess, (state, { producto }) => ({
    ...state,
    loading: false,
    listaProductos: [...state.listaProductos, producto],
  })),
  on(ProductoActions.crearProductoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ProductoActions.actualizarProducto, state => ({
    ...state,
    loading: true,
  })),
  on(ProductoActions.actualizarProductoSuccess, (state, { producto }) => ({
    ...state,
    loading: false,
    error: null,
    listaProductos: state.listaProductos.map(p =>
      p.Id === producto.Id && producto.Id !== undefined
        ? { ...p, ...producto }
        : p
    )
  })),
  on(ProductoActions.actualizarProductoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ProductoActions.eliminarProducto, state => ({
    ...state,
    loading: true,
  })),
  on(ProductoActions.eliminarProductoSuccess, (state, { id }) => {
    const filteredProductos = state.listaProductos.filter(p => p.Id !== id);
    return {
      ...state,
      loading: false,
      listaProductos: filteredProductos,
    };
  }
  ),
  on(ProductoActions.eliminarProductoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);