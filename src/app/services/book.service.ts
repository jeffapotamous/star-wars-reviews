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
        id: 16,
        name: "Thrawn Ascendancy: Chaos Rising",
        appleLink: "",
        fileName: "Chaos Rising.jpg",
        amazonLink: "https://www.amazon.com/dp/0593157680",
        googlePlayLink: "https://play.google.com/store/books/details?id=OsmyDwAAQBAJ",
        pros: "",
        cons: "",
        hasCharacterSection: true
      },
      {
        id: 17,
        name: "Alphabet Squadron: Shadow Fall",
        appleLink: "",
        fileName: "shadow fall.jpg",
        amazonLink: "https://www.amazon.com/dp/1984820044",
        googlePlayLink: "https://play.google.com/store/books/details?id=58WyDwAAQBAJ",
        pros: "",
        cons: ""
      }
    ];
  }
}
