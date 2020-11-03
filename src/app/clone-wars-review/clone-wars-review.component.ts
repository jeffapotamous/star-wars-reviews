import { Component, OnInit } from '@angular/core';
import { CloneWarsEpisode } from '../interfaces/interfaces';
import { CloneWarsEpisodesService } from '../services/clone-wars-episodes.service';

export enum EpisodeClass {
  BEST,
  GOOD,
  ALRIGHT,
  BAD
}

@Component({
  selector: 'app-clone-wars-review',
  templateUrl: './clone-wars-review.component.html',
  styleUrls: ['./clone-wars-review.component.scss']
})
export class CloneWarsReviewComponent implements OnInit {

  public bestCloneWarsEpisodes: CloneWarsEpisode[];
  public goodCloneWarsEpisodes: CloneWarsEpisode[];
  public alrightCloneWarsEpisodes: CloneWarsEpisode[];
  public badCloneWarsEpisodes: CloneWarsEpisode[];

  constructor(private cloneWarsEpisodesService: CloneWarsEpisodesService) {
    this.bestCloneWarsEpisodes = [];
    this.goodCloneWarsEpisodes = [];
    this.alrightCloneWarsEpisodes = [];
    this.badCloneWarsEpisodes = [];
  }

  ngOnInit(): void {
    const lastBestEpisode: number = 88;
    const lastGoodEpisode: number = 49;
    const lastAlrightEpisode: number = 128;

    let code: EpisodeClass = EpisodeClass.BEST;

    console.log(this.cloneWarsEpisodesService.getCloneWarsEpisodes())
    this.cloneWarsEpisodesService.getCloneWarsEpisodes().forEach((episode: CloneWarsEpisode) => {
      switch (code) {
        case EpisodeClass.BEST:
          this.bestCloneWarsEpisodes.push(episode);
          break;
        case EpisodeClass.GOOD:
          this.goodCloneWarsEpisodes.push(episode);
          break;
        case EpisodeClass.ALRIGHT:
          this.alrightCloneWarsEpisodes.push(episode);
          break;
        case EpisodeClass.BAD:
          this.badCloneWarsEpisodes.push(episode);
          break;
      }

      switch (episode.releaseOrder) {
        case lastBestEpisode:
          code = EpisodeClass.GOOD;
          break;
        case lastGoodEpisode:
          code = EpisodeClass.ALRIGHT;
          break;
        case lastAlrightEpisode:
          code = EpisodeClass.BAD;
          break;
      }
    });
    console.log(this.bestCloneWarsEpisodes);
  }

}
