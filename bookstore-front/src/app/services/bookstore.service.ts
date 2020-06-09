import { Order } from './../model/order-model';
import { BookList } from './../model/book-list.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL_BOOKS: string = "http://localhost:3000/api/books";
const URL_ORDER: string = "http://localhost:3000/api/orders";

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private http: HttpClient) { }

  getAllBooks(parameters?: any): Observable<BookList> {
    let queryParams = {};
    if (parameters) {
      queryParams = {
        params: new HttpParams()
        .set("bestseller", parameters.bestseller || "")
        .set("discount", parameters.discount || "")
      }
    }

    return this.http.get(URL_BOOKS, queryParams).pipe(map(data => {
      return new BookList(data);
    }));
  }

  submitOrder(newOrder: Order): Observable<Order> {
    return this.http.post(URL_ORDER, newOrder).pipe(map(data => {
      return new Order (data);
    }));
  }
}
