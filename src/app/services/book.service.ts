import { Injectable } from '@angular/core';
import { Book } from '../interfaces/interfaces';
import { UtilsService } from './utils.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private listOfBooks: Book[];

  constructor(private utilsService: UtilsService) {
    this.listOfBooks = [
      {
        id: 0,
        name: 'Thrawn',
        releaseDate: moment({ year: 2017, month: 3, date: 11 }),
        pros: 'Insight on Thrawn\'s thought process is so very interesting. To see how Thrawn observes and interacts in the situations he is put in is fascinating.',
        cons: 'Arihnda Pryce sections are good, but compared to the Thrawn portions, it\'s a little boring.',
        fileName: 'thrawn.jpg',
        amazonLink: 'https://www.amazon.com/dp/0345511271',
        googlePlayLink: 'https://play.google.com/store/books/details?id=6OuvDAAAQBAJ',
        appleLink: ''
      },
      {
        id: 1,
        name: 'Thrawn 3: Treason',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'Seeing Eli Vanto come back as part of the Chiss Ascendancy was really fun to see! He was one of my favorite characters from the first book, so it was good to see how he had his deduction skills had improved. The story itself is very interesting to follow. And the climax truly shows Thrawn\'s genius.',
        cons: 'Not that many cons honestly, can\'t think of any at least.',
        fileName: 'thrawn treason.jpg',
        amazonLink: 'https://www.amazon.com/dp/1984820982',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=mx1-DwAAQBAJ',
        appleLink: ''
      },
      {
        id: 2,
        name: 'Master and Apprentice',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'Obi Wan and Qui-Gon alone are enough to sell this book. Their master and apprentice dynamic is so cool. We get insight on how they both feel about being paired together, and it reflects the Phantom Menace so well. There are heavy prophecies in this book, and how they influenced Qui-Gon (and those around him) builds so much back story. The story is not really the main point of this book, it really is more about the characters. That said, the story is so incredible! The characters, environment, and political issues in Pijal were so dang interesting!',
        cons: 'There is somewhat of a B-Story in the book involving 2 characters. They\'re alright characters, but they are kinda sparse for the most part so you forget about them.',
        fileName: 'master and apprentice.jpg',
        amazonLink: 'https://www.amazon.com/dp/0525619372',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=w0NkDwAAQBAJ',
        appleLink: ''
      },
      {
        id: 3,
        name: 'Thrawn 2: Alliances',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'This book jumps between 2 different times and follows the same characters, which is a very unique premise.',
        cons: 'Some of the Padme scenes seem dragged out. There\'s a part where she just chills in a wrecked ship for a few days, and it was a little boring.',
        fileName: 'thrawn alliances.webp',
        amazonLink: 'https://www.amazon.com/dp/052548048X',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=keA4DwAAQBAJ',
        appleLink: ''
      },
      {
        id: 4,
        name: 'Alphabet Squadron',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'The scenes where the characters are jumping into their fighters and taking off were so engaging. My heart was pumping hearing Yrica Quell go through her launch procedure, gave me chills.',
        cons: 'It was a little difficult to follow since there were a few flashbacks for character building.',
        fileName: 'alphabet squadron.jpg',
        amazonLink: 'https://www.amazon.com/dp/1984821989',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=jIBxDwAAQBAJ',
        appleLink: ''
      },

      {
        id: 5,
        name: 'Queen\'s Shadow',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'The insight on all the secrets and thoughts that go into protecting the queen/senator is fascinating. I also really love the explination to so much of the strange behavior that Padme had in the movies.',
        cons: 'If you like dresses and hair styling and talking about fashion, then you\'ll really love this book. A lot of that was just not for me.',
        fileName: 'queens shadow.jpg',
        amazonLink: 'https://www.amazon.com/dp/1368024254',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=CsllDwAAQBAJ',
        appleLink: ''
      },
      {
        id: 6,
        name: 'Lost Stars',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'I LOVED how this book takes place over so many years of known canon, and inserts itself into those incredibly notable stories. Everything was familar, but from a completely different point of view. A book that mirrors Romeo and Juliet in the SW universe.',
        cons: 'My only complaint I can think of is this book exists in the Star Wars movies, so more than half of the book you already know how it will turn out.',
        fileName: 'lost stars.jpg',
        amazonLink: 'https://www.amazon.com/dp/1368013783',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=RySrCQAAQBAJ',
        appleLink: ''
      },
      {
        id: 7,
        name: 'A New Dawn',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'Kanan is one of my favorite SW characters to begin with. You get a good idea on his origins and motivations, as well as how he met Hera! Count Vidian is a curious character, and the mining operation is neat to observe. Lots of info on how mining is done and the materials mined.',
        cons: 'This is a Young Adult reader, and it really feels that way! Haha Kanan acts like a teenager looking for love whenever he interacts with women. It\'s kinda funny, but I think I would have related better if I read this when I was in middle/high school more.',
        fileName: 'a new dawn.jpg',
        amazonLink: 'https://www.amazon.com/dp/0553392867',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=wgZxAwAAQBAJ',
        appleLink: ''
      },
      {
        id: 8,
        name: 'Ahsoka',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'Finding out what Ahsoka did after leaving the Jedi Order is something that I\'m sure everyone who\'s seen the CW wants to know. If you like Ahsoka, you\'ll like this book!  Some cool cameos in here as well!',
        cons: 'The story wasn\'t really super important in this book, it was mainly about the character and what she was going through.',
        fileName: 'ahsoka.jpg',
        amazonLink: 'https://www.amazon.com/dp/1484705661',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=XbIHDAAAQBAJ',
        appleLink: ''
      },
      {
        id: 9,
        name: 'Dooku: Jedi Lost (Audiobook)',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'This is technically a spoiler, but Dooku left the Jedi order at some point (duh-duh-duh). This story shows the apprenticeship that Dooku went through, and that in and of itself is a remarkable story. Some very VERY interesting cameos in here too.',
        cons: 'Dooku\'s story leaving the Jedi Order feels a little rushed. Some motivations are present and definite, but when he leaves it feels like there wasn\'t enough to it. This book (like Ahsoka) is more about the character progression than the story itself.',
        fileName: 'dooku jedi lost.jpg',
        amazonLink: 'https://www.amazon.com/dp/B07Q47JWLZ',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=piikDwAAQBAJ',
        appleLink: ''
      },

      {
        id: 10,
        name: 'Aftermath',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'The characters introduced in this book became beloved. You will grow to love Sinjir and Nora. Mr. Bones made me laugh out loud multiple times! Temmin is loveable and you\'re rooting for him the entire time. Great characters, and honestly a really good story! Also, the interludes are really interesting!',
        cons: 'I\'m not a big fan of the writing. There are so many analogies in this book that try to make you think it\'s Star Wars, like if the author wanted to say Temmin was eating cold soup, he would say "Temmin sips on the soup as cold as a Hoth icicle" or "Temmin sips soup as thick as the swamps of Dagobah". Yeah, we get that the book is in Star Wars, use the story to portary that, not the constant plugs.',
        fileName: 'aftermath.jpg',
        amazonLink: 'https://www.amazon.com/dp/034551162X',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=fVyWBgAAQBAJ',
        appleLink: ''
      },
      {
        id: 11,
        name: 'Lords of the Sith',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'Sheer and utter power of the Sith. You truly believe these people are inhuman, and after reading this book I wouldn\'t be surprised if Vader was able to lift an entire mountain from it\'s base. Brutal strength from Vader, and very cunning power from Palpatine.',
        cons: 'The writing just felt weird to read. On occassion I felt pulled out of the SW universe since the writing would feel like any other book you\'d read.',
        fileName: 'lords of the sith.jpg',
        amazonLink: 'https://www.amazon.com/dp/0606385177',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=Y6dBBAAAQBAJ',
        appleLink: ''
      },
      {
        id: 12,
        name: 'Tarkin',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'If you like Tarkin, you\'ll enjoy this book! We get to see the side of Tarkin that you secretly fear when he\'s on screen. He\'s only just an intimidating man in the movies/shows, but you get to see why you shudder and should fear Tarkin.',
        cons: 'Slow, very very slow. But that\'s to be expected from a person like Tarkin! So it was fitting.',
        fileName: 'tarkin.jpg',
        amazonLink: 'https://www.amazon.com/dp/B0182QCVJ6',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=7S6OAwAAQBAJ',
        appleLink: ''
      },
      {
        id: 13,
        name: 'Aftermath 3: Empire\'s End',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'It finishes the story. These characters that you\'ve been following, and the small stories that they\'ve been going through, all come to a close. In this one, we don\'t have the entire team together, they\'re all split up to do their own things, which leads to many story lines that all colide in the end.',
        cons: 'Again, dragged out. The story can be sumaraized into a few sentences, and not a lot will be lost. I\'m definitely not a fan of the author\'s story telling.',
        fileName: 'aftermath empires end.jpg',
        amazonLink: 'https://www.amazon.com/dp/1101966963',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=KWchDAAAQBAJ',
        appleLink: ''
      },
      {
        id: 14,
        name: 'Aftermath 2: Life Debt',
        releaseDate: moment({ year: 2019, month: 6, date: 23 }),
        pros: 'Some more notable characters from the existing canon show up in this book, and it is done well! Notably, Wedge Antilles gets a very interesting role in the story, one that introduces family struggle and the everyday life of a person in the New Republic. Rae Sloan\'s role seems small, but it is perfectly set up for her to become the main protagonist in the next book.',
        cons: 'It was just boring! I feel like there were 3 things total that happen in this book. My friend sumarized it best, the book starts to get good when they finally meet up with the person they\'re looking for, but this happens about halfway through the book. I can hardly remember the first half of the book, and could probably sumarize the entire story in just a few sentences. ',
        fileName: 'aftermath life debt.jpg',
        amazonLink: 'https://www.amazon.com/dp/1101966939',
        googlePlayLink: 'https://play.google.com/store/books/details/?id=RpiTCgAAQBAJ',
        appleLink: ''
      }
    ];
  }

  public getListOfBooks(): Book[] {
    return this.listOfBooks;
  }

  public getBooksReleaseOrder(): Book[] {
    const booksCopy = this.utilsService.deepCopy(this.listOfBooks);
    booksCopy.sort((a: Book, b: Book) => a.releaseDate.isBefore(b.releaseDate));
    return booksCopy;
  }

}
