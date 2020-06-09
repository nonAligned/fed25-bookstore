import { Book } from './book.model';
export class BookList {
    results: Book[];

    constructor(obj?: any) {
        this.results = obj && obj.results || [];
    }
}