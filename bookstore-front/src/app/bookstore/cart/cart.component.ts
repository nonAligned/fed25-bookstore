import { ModalComponent } from './../modal/modal.component';
import { Book } from './../../model/book.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() addedBooks: Book[] = [];
  @Input() totalCost: number;
  @Output() orderMade: EventEmitter<string> = new EventEmitter();
  @Output() bookRemoved: EventEmitter<string> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal() {
    let modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.addedBooks = this.addedBooks
    modalRef.componentInstance.totalCost = this.totalCost
    modalRef.componentInstance.itemRemoved.subscribe(data => {
      this.bookRemoved.emit(data);
    });

    modalRef.result.then((result) => {
      if (result) {
        this.orderMade.emit("success");
      }
    });
  }

}
