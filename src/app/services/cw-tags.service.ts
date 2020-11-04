import { Injectable } from '@angular/core';
import { Relationship } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CwTagsService {

  private cwTagRelationships: Relationship[];

  public setCwTagRelationships(newCwTagRels: Relationship[]) {
    this.cwTagRelationships = newCwTagRels;
  }
}
