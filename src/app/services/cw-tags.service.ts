import { Injectable } from '@angular/core';
import { CloneWarsEpisode, Relationship, Tag } from '../interfaces/interfaces';
import { CloneWarsEpisodesService } from './clone-wars-episodes.service';

@Injectable({
  providedIn: 'root'
})
export class CwTagsService {

  private cwTagRelationships: Relationship[];

  constructor(private cloneWarsEpisodesService: CloneWarsEpisodesService) { }

  public setCwTagRelationships(newCwTagRels: Relationship[]) {
    this.cwTagRelationships = newCwTagRels;
  }

  public getCloneWarsEpisodesByTag(tagID: number): CloneWarsEpisode[] {
    return this.cloneWarsEpisodesService.getEpisodeByIDs(this.cwTagRelationships.filter((rel) => rel.table1 === tagID).map((rel) => rel.table2));
  }
}
