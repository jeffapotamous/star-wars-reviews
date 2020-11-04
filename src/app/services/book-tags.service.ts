import { Injectable } from '@angular/core';
import { Relationship } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookTagsService {

  private bookTagRelationships: Relationship[];

  public setBookTagRelationships(newBookTagRes: Relationship[]) {
    this.bookTagRelationships = newBookTagRes;
  }

  public getBookTagRelationships(): Relationship[] {
    return this.bookTagRelationships;
  }
}
