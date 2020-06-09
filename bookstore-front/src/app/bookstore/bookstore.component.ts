import { Book } from './../model/book.model';
import { BookstoreService } from './../services/bookstore.service';
import { BookList } from './../model/book-list.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookStoreComponent implements OnInit {
  books: BookList;
  addedBooks: Book[] = [];
  totalCost: number;
  parameters = {
    bestseller: "",
    discount: ""
  }

  constructor(private service: BookstoreService) { }

  ngOnInit() {
    this.updateBooks();
  }

  updateBooks() {
    this.service.getAllBooks(this.parameters).subscribe(data => {
      this.books = data;
    });
  }

  updateParams(newParam: any) {
    this.parameters.bestseller = newParam.bestseller;
    this.parameters.discount = newParam.discount;
    this.updateBooks();
  }

  addBook(addedBook: Book) {
    this.addedBooks.push(addedBook);
    this.calcCost();
  }

  calcCost() {
    this.totalCost = this.addedBooks.map(elem => elem.price).reduce((prev, current) => prev + current);
  }

  resetCart(result: string) {
    if(result == "success") {
      this.addedBooks = [];
      this.totalCost = 0;
    }
  }

  updateCart(id: string) {
    this.addedBooks = this.addedBooks.filter(elem => elem._id != id);
    this.calcCost();
  }

}
