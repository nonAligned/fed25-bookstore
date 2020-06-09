import { Book } from './../../model/book.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() book: Book;
  @Output() bookAdded: EventEmitter<Book> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addBook() {
    this.bookAdded.emit(this.book);
  }

}
