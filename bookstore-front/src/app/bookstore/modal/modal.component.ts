import { BookstoreService } from './../../services/bookstore.service';
import { OrderedBook } from './../../model/ordered-book-model';
import { Order } from './../../model/order-model';
import { Book } from './../../model/book.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() addedBooks: Book[];
  @Input() totalCost: number;
  @Output() itemRemoved: EventEmitter<string> = new EventEmitter();
  order = {
    address: "",
    appartment: "",
    telephone: null
  }
 

  constructor(private service: BookstoreService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let newOrder: Order = new Order();
    newOrder.address = this.order.address;
    newOrder.appartment = this.order.appartment;
    newOrder.telephone = this.order.telephone;
    newOrder.totalCost = this.totalCost;
    for(let i in this.addedBooks) {
      newOrder.orderedBooks.push({
        name: this.addedBooks[i].name,
        price: this.addedBooks[i].price
      });
    }
    this.service.submitOrder(newOrder).subscribe(data => {
      console.log(data);
      this.closeModal();
    },
    error => {
      console.log(error);
    })
  }

  closeModal() {
    this.activeModal.close('close');
  }

  removeItem(id: string) {
    this.addedBooks = this.addedBooks.filter(elem => elem._id != id);
    if (this.addedBooks.length > 0) {
      this.calculateTotalCost();
    } else {
      this.totalCost = 0;
      this.closeModal();
    }
    this.itemRemoved.emit(id);
  }

  calculateTotalCost() {
    this.totalCost = this.addedBooks.map(elem => elem.price).reduce((prev, current) => prev + current);
  }

}
