import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  discount: boolean = false;
  bestseller: boolean = false;
  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateParams() {
    this.filterChange.emit({
      discount: this.discount,
      bestseller: this.bestseller
    });
  }

}
