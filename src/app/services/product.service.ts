import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductResponse} from "../models/product.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root' // use this service anywhere inside our app
})
export class ProductService {

  private readonly apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiUrl + '/product');
  }

}
