import { Component, OnInit } from '@angular/core';
import { ReviewClass } from '../interfaces/enums';
import { CloneWarsEpisode } from '../interfaces/interfaces';
import { CloneWarsEpisodesService } from '../services/clone-wars-episodes.service';

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

    let code: ReviewClass = ReviewClass.BEST;

    this.cloneWarsEpisodesService.getCloneWarsEpisodes().forEach((episode: CloneWarsEpisode) => {
      switch (code) {
        case ReviewClass.BEST:
          this.bestCloneWarsEpisodes.push(episode);
          break;
        case ReviewClass.GOOD:
          this.goodCloneWarsEpisodes.push(episode);
          break;
        case ReviewClass.ALRIGHT:
          this.alrightCloneWarsEpisodes.push(episode);
          break;
        case ReviewClass.BAD:
          this.badCloneWarsEpisodes.push(episode);
          break;
      }

      switch (episode.releaseOrder) {
        case lastBestEpisode:
          code = ReviewClass.GOOD;
          break;
        case lastGoodEpisode:
          code = ReviewClass.ALRIGHT;
          break;
        case lastAlrightEpisode:
          code = ReviewClass.BAD;
          break;
      }
    });
  }

}
