import { Injectable } from '@angular/core';
import { Book } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private listOfBooks: Book[];

  public setListOfBooks(newBooks: Book[]) {
    this.listOfBooks = newBooks;
  }

  public getListOfBooks(): Book[] {
    return this.listOfBooks;
  }

  public getInProgressBooks(): Book[] {
    return [
      {
        id: 15,
        name: "Light of the Jedi",
        appleLink: "",
        fileName: "light of the jedi.jpg",
        amazonLink: "https://www.amazon.com/dp/0593157710",
        googlePlayLink: "https://play.google.com/store/books/details?id=ebvQDwAAQBAJ",
        pros: "",
        cons: "",
        hasCharacterSection: true
      }
    ];
  }
}
