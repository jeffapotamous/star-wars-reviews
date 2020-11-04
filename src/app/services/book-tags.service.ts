import { Injectable } from '@angular/core';
import { Relationship } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookTagsService {

  private bookTagRelationships: Relationship[];

  public bookTagRelsLoadedRef: Subject<Relationship[]>;

  constructor(private http: HttpClient) {
    this.bookTagRelsLoadedRef = new Subject<Relationship[]>();
  }

  public loadBookTagRelationships() {
    this.http.get('./assets/db/tag-books.json').toPromise().then((data: any) => {
      this.bookTagRelationships = data;
      this.bookTagRelsLoadedRef.next(this.bookTagRelationships);
    });
  }

  public getBookTagRelationships(): Relationship[] {
    return this.bookTagRelationships;
  }
}
