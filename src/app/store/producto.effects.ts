import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { mergeMap } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import { Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { ProductoService } from "../services/producto.service";
import { ProductoActions } from "./producto.actions";

@Injectable()
export class ProductoEffects {
  
  constructor(
    private actions$: Actions,
    private productoService: ProductoService
  ) { }

  cargarProductos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductoActions.cargarProductos),
      mergeMap(() =>
        this.productoService.getProductos().pipe(
          map(productos => ProductoActions.cargarProductosSuccess({ productos })),
          catchError(error => of(ProductoActions.cargarProductosFailure({ error })))
        )
      )
    );
  }, { functional: true });

  crearProducto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductoActions.crearProducto),
      mergeMap(action =>
        this.productoService.crearProducto(action.producto).pipe(
          map(producto => ProductoActions.crearProductoSuccess({ producto })),
          catchError(error => of(ProductoActions.crearProductoFailure({ error })))
        )
      )
    );
  }, { functional: true });

  actualizarProducto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductoActions.actualizarProducto),
      filter(action => !!action.producto),
      switchMap(action =>
        this.productoService.actualizarProducto(action.producto).pipe(
          map(() => ProductoActions.actualizarProductoSuccess({ producto: action.producto })),
          catchError(error => of(ProductoActions.actualizarProductoFailure({ error })))
        )
      )
    );
  }, { functional: true });

  eliminarProducto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductoActions.eliminarProducto),
      mergeMap(action =>
        this.productoService.eliminarProducto(action.id).pipe(
          map(() => ProductoActions.eliminarProductoSuccess({ id: action.id })),
          catchError(error => of(ProductoActions.eliminarProductoFailure({ error })))
        )
      )
    );
  }, { functional: true });
}
