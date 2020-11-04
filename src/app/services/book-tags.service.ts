import { Injectable } from '@angular/core';
import { Relationship } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookTagsService {

  private bookTagRelationships: Relationship[] = [];

  constructor(private http: HttpClient) { }

  public loadBookTagRelationships() {
    this.http.get('./assets/db/tag-books.json').toPromise().then((data: any) => { this.bookTagRelationships = data });
  }

  public getBookTagRelationships(): Relationship[] {
    return this.bookTagRelationships;
  }
}
