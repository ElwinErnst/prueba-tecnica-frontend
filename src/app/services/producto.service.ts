import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ProductoDto } from '../store/producto.dto';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  updateProducto(id: number, producto: ProductoDto) {
    throw new Error("Method not implemented.");
  }
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProductos(): Observable<ProductoDto[]> {
    return this.http.get<ProductoDto[]>(this.apiUrl);
  }

  getProducto(id: number): Observable<ProductoDto> {
    return this.http.get<ProductoDto>(`${this.apiUrl}/${id}`);
  }

  crearProducto(producto: ProductoDto): Observable<ProductoDto> {
    return this.http.post<ProductoDto>(this.apiUrl, producto);
  }

  actualizarProducto(producto: ProductoDto): Observable<ProductoDto> {
    return this.http.put<ProductoDto>(`${this.apiUrl}/${producto.Id}`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);

  }
}