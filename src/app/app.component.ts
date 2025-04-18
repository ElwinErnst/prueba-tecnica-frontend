import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from "./lista-productos/lista-productos.component";
import { Store } from '@ngrx/store';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ListaProductosComponent
  ],
  template: `
  <div class="app-container">
    <h1>Listado de Productos</h1>
    <app-lista-productos></app-lista-productos>
  </div>
  `,
  styles: [`
  .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    color: #f8f8f8;
    margin-bottom: 20px;
  }
  `]
})

export class AppComponent {
  title = 'frontend-productos';
  constructor(private store: Store, private productoService: ProductoService) {
    console.log('AppComponent cargado');
  }
}