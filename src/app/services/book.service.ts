import { Injectable } from '@angular/core';
import { Book } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private listOfBooks: Book[];

  public booksLoadedRef: Subject<Book[]>;

  constructor(private http: HttpClient) {
    this.booksLoadedRef = new Subject<Book[]>();
  }

  public loadBooks() {
    this.http.get('./assets/db/books.json').toPromise().then((data: Book[]) => {
      this.listOfBooks = data;
      this.booksLoadedRef.next(this.listOfBooks);
    });
  }

  public getListOfBooks(): Book[] {
    return this.listOfBooks;
  }

}
