import { createAction, props } from '@ngrx/store';
import { ProductoDto } from './producto.dto';

const cargarProductos = createAction('[Producto] Cargar Productos');
const cargarProductosSuccess = createAction('[Producto] Cargar Productos Success', props<{ productos: ProductoDto[] }>());
const cargarProductosFailure = createAction('[Producto] Cargar Productos Failure', props<{ error: any }>());

const crearProducto = createAction('[Producto] Crear Producto', props<{ producto: ProductoDto }>());
const crearProductoSuccess = createAction('[Producto] Crear Producto Success', props<{ producto: ProductoDto }>());
const crearProductoFailure = createAction('[Producto] Crear Producto Failure', props<{ error: any }>());

const actualizarProducto = createAction('[Producto] Actualizar Producto', props<{ id: number, producto: ProductoDto }>());
const actualizarProductoSuccess = createAction('[Producto] Actualizar Producto Success', props<{ producto: ProductoDto }>());
const actualizarProductoFailure = createAction('[Producto] Actualizar Producto Failure', props<{ error: any }>());

const eliminarProducto = createAction('[Producto] Eliminar Producto', props<{ id: number }>());
const eliminarProductoSuccess = createAction('[Producto] Eliminar Producto Success', props<{ id: number }>());
const eliminarProductoFailure = createAction('[Producto] Eliminar Producto Failure', props<{ error: any }>());

export const ProductoActions = {
    cargarProductos,
    cargarProductosSuccess,
    cargarProductosFailure,
    crearProducto,
    crearProductoSuccess,
    crearProductoFailure,
    actualizarProducto,
    actualizarProductoSuccess,
    actualizarProductoFailure,
    eliminarProducto,
    eliminarProductoSuccess,
    eliminarProductoFailure
  };
  