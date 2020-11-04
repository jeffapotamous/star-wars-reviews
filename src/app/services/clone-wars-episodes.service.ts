import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CloneWarsEpisode } from '../interfaces/interfaces';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CloneWarsEpisodesService {

  private listOfCloneWars: CloneWarsEpisode[];

  public cloneWarsEpisodesLoadedRef: Subject<any>;

  constructor(private http: HttpClient, private utilsService: UtilsService) {
    this.cloneWarsEpisodesLoadedRef = new Subject<any>();
  }

  public loadCloneWarsEpisodes() {
    this.http.get('./assets/db/clone-wars-episodes.json').toPromise().then((data: any) => {
      this.listOfCloneWars = data;
      this.cloneWarsEpisodesLoadedRef.next(this.listOfCloneWars);
    });
  }

  public getCloneWarsEpisodes(): CloneWarsEpisode[] {
    return this.listOfCloneWars;
  }

  public getCloneWarsEpisodesChronological(): CloneWarsEpisode[] {
    const episodesCopy = this.utilsService.deepCopy(this.listOfCloneWars);
    return episodesCopy.sort((a: CloneWarsEpisode, b: CloneWarsEpisode) => a.chronologicalOrder - b.chronologicalOrder);
  }

  public getCloneWarsEpisodesRelease(): CloneWarsEpisode[] {
    const episodesCopy = this.utilsService.deepCopy(this.listOfCloneWars);
    return episodesCopy.sort((a: CloneWarsEpisode, b: CloneWarsEpisode) => a.releaseOrder - b.releaseOrder);
  }
}
