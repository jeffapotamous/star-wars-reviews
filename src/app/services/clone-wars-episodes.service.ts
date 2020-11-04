import { Injectable } from '@angular/core';
import { CloneWarsEpisode } from '../interfaces/interfaces';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CloneWarsEpisodesService {

  private cloneWarsEpisodes: CloneWarsEpisode[];

  constructor(private utilsService: UtilsService) { }

  public setCloneWarsEpisodes(newCloneWarsEps: CloneWarsEpisode[]) {
    this.cloneWarsEpisodes = newCloneWarsEps;
  }

  public getCloneWarsEpisodes(): CloneWarsEpisode[] {
    return this.cloneWarsEpisodes;
  }

  public getCloneWarsEpisodesChronological(): CloneWarsEpisode[] {
    const episodesCopy = this.utilsService.deepCopy(this.cloneWarsEpisodes);
    return episodesCopy.sort((a: CloneWarsEpisode, b: CloneWarsEpisode) => a.chronologicalOrder - b.chronologicalOrder);
  }

  public getCloneWarsEpisodesRelease(): CloneWarsEpisode[] {
    const episodesCopy = this.utilsService.deepCopy(this.cloneWarsEpisodes);
    return episodesCopy.sort((a: CloneWarsEpisode, b: CloneWarsEpisode) => a.releaseOrder - b.releaseOrder);
  }
}
