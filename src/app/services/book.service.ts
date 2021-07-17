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
        id: 20,
        name: "Thrawn Ascendancy: Greater Good",
        appleLink: "",
        fileName: "greater good.jpg",
        amazonLink: "https://smile.amazon.com/dp/1529101921",
        googlePlayLink: "https://play.google.com/store/books/details?id=OdMAEAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 20,
        name: "The Rising Storm",
        appleLink: "",
        fileName: "The Rising Storm.jpg",
        amazonLink: "https://smile.amazon.com/dp/0593159411",
        googlePlayLink: "https://play.google.com/store/books/details?id=hmQBEAAAQBAJ",
        pros: "",
        cons: ""
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
      },
      {
        id: 20,
        name: "Phasma",
        appleLink: "",
        fileName: "phasma.jpg",
        amazonLink: "https://smile.amazon.com/dp/1524796336",
        googlePlayLink: "https://play.google.com/store/books/details?id=48WtDgAAQBAJ",
        pros: "",
        cons: ""
      }
    ];
  }

  public getInQueueBooks(): Book[] {
    return [
      {
        id: 19,
        name: "Queen's Hope",
        fileName: "",
        amazonLink: "",
        googlePlayLink: "",
        pros: "",
        cons: ""
      }
    ];
  }
}
