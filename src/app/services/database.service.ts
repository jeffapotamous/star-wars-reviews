import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book, CloneWarsEpisode, Relationship, Tag } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  /* ----- Subjects ----- */
  public booksLoadedRef: Subject<Book[]>;
  public cloneWarsEpisodesLoadedRef: Subject<CloneWarsEpisode[]>;
  public tagsLoadedRef: Subject<Tag[]>;
  public bookTagRelsLoadedRef: Subject<Relationship[]>;

  constructor(private http: HttpClient) {
    this.booksLoadedRef = new Subject<Book[]>();
    this.cloneWarsEpisodesLoadedRef = new Subject<CloneWarsEpisode[]>();
    this.tagsLoadedRef = new Subject<Tag[]>();
    this.bookTagRelsLoadedRef = new Subject<Relationship[]>();
  }

  public loadBooks() {
    this.http.get('./assets/db/books.json').toPromise().then((data: Book[]) => {
      this.booksLoadedRef.next(data);
    });
  }

  public loadCloneWarsEpisodes() {
    this.http.get('./assets/db/clone-wars-episodes.json').toPromise().then((data: CloneWarsEpisode[]) => {
      this.cloneWarsEpisodesLoadedRef.next(data);
    });
  }

  public loadTags() {
    this.http.get('./assets/db/tags.json').toPromise().then((data: Tag[]) => {
      this.tagsLoadedRef.next(data);
    });
  }

  public loadBookTagRelationships() {
    this.http.get('./assets/db/tag-books.json').toPromise().then((data: Relationship[]) => {
      this.bookTagRelsLoadedRef.next(data);
    });
  }
}
