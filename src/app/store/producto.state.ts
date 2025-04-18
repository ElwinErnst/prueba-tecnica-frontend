import { ProductoDto } from './producto.dto';

export interface ProductoState {
  listaProductos: ProductoDto[];
  loading: boolean;
  error: any;
}