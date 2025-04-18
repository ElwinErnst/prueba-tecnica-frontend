import { Component, OnInit } from '@angular/core';
import { ProductoDto } from '../store/producto.dto';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductoActions } from '../store/producto.actions';
import * as ProductoSelectors from '../store/producto.selectors';
import { DropdownModule } from 'primeng/dropdown';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule,
    TagModule,
    FormsModule,
    DropdownModule,
    AsyncPipe,
  ],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./style.css'],
})

export class ListaProductosComponent implements OnInit {
  productos$: Observable<ProductoDto[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  productForm: FormGroup;
  displayDialog: boolean = false;
  editandoProducto: boolean = false;
  selectedProductoId: number = 0;


  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {

    console.log('ListaProductosComponent inicializado');

    this.productos$ = this.store.select(ProductoSelectors.selectAllProductos);
    this.loading$ = this.store.select(ProductoSelectors.selectProductosLoading);
    this.error$ = this.store.select(ProductoSelectors.selectProductosError);

    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, Validators.required],
      stock: [0, Validators.required],
    });

  }

  ngOnInit(): void {
    this.store.dispatch(ProductoActions.cargarProductos());
  }

  nuevoProducto(): void {
    this.productForm.reset();
    this.editandoProducto = false;
    this.displayDialog = true;
  }

  editarProducto(producto: ProductoDto): void {
    this.selectedProductoId = producto.Id!;
    this.productForm.patchValue({
      nombre: producto.Nombre,
      precio: producto.Precio,
      stock: producto.Stock,
    });

    this.editandoProducto = true;
    this.displayDialog = true;

  }

  eliminarProducto(id: number): void {
    this.store.dispatch(ProductoActions.eliminarProducto({ id }));
  }

  guardarProducto(): void {
    if (this.productForm.valid) {
      const producto: ProductoDto = {

        Nombre: this.productForm.value.nombre,
        Precio: this.productForm.value.precio,
        Stock: this.productForm.value.stock,
      };
      
      if (this.editandoProducto) {
        producto.Id = this.selectedProductoId;
        this.store.dispatch(ProductoActions.actualizarProducto({ id: producto.Id, producto }));
      } else {
        this.store.dispatch(ProductoActions.crearProducto({ producto }));
      }
      
      this.cerrarDialog();
    }
  }

  cerrarDialog(): void {
    this.displayDialog = false;
    this.selectedProductoId = 0;
  }
}