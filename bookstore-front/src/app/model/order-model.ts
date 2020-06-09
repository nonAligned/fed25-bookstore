import { OrderedBook } from './ordered-book-model';
export class Order {
    totalCost: number;
    address: string;
    appartment: string;
    telephone: number;
    orderedBooks: OrderedBook[];

    constructor(obj?: any) {
        this.totalCost = obj && obj.totalCost || 0;
        this.address = obj && obj.address || "";
        this.appartment = obj && obj.appartment || "";
        this.telephone = obj && obj.telephone || 0;
        this.orderedBooks = obj && obj.orderedBooks || [];
    }
}