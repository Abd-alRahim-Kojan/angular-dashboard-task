import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { productsModel } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<productsModel[]> {
    return this.http.get<productsModel[]>(`${environment.baseUrl}/products`);
  }

}
