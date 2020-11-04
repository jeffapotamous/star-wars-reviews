import { Component, OnInit } from '@angular/core';
import { ReviewClass } from '../interfaces/enums';
import { CloneWarsEpisode, TableColumn } from '../interfaces/interfaces';
import { CloneWarsEpisodesService } from '../services/clone-wars-episodes.service';

@Component({
  selector: 'app-clone-wars-review',
  templateUrl: './clone-wars-review.component.html',
  styleUrls: ['./clone-wars-review.component.scss']
})
export class CloneWarsReviewComponent implements OnInit {

  /* ----- Table ----- */
  public tableColumns: TableColumn[];
  public tableData: any[];

  constructor(private cloneWarsEpisodesService: CloneWarsEpisodesService) {
    this.tableColumns = [
      { header: 'Season', field: 'season', sort: true, style: { width: '100px', align: 'right' }, classCompare: 'season' },
      { header: 'Episode', field: 'episode', sort: false, style: { width: '100px', align: 'right' } },
      { header: 'Name', field: 'name', sort: true },
      { header: 'Rank', field: 'rankOrder', sort: true, style: { width: '100px', align: 'right' }, classCompare: 'rank' },
      { header: 'Release Order', field: 'releaseOrder', sort: true, style: { width: '150px', align: 'right' } },
      { header: 'Chronological Order', field: 'chronologicalOrder', sort: true, style: { width: '200px', align: 'right' } },
      { header: 'Disney+', field: 'disneyPlus', sort: false, style: { width: '100px', align: 'center' }, type: 'linkIcon' },
    ];
    this.tableData = [];
  }

  ngOnInit(): void {
    this.cloneWarsEpisodesService.cloneWarsEpisodesLoadedRef.subscribe((_data: any) => {
      this.cloneWarsEpisodesService.getCloneWarsEpisodes().forEach((episode: CloneWarsEpisode, index: number) => {
        const episodeData: any = episode;
        episodeData.disneyPlus = { image: 'assets/images/icon.png', link: episodeData.link, class: 'disney-logo' };
        episodeData.rankOrder = index + 1;

        this.tableData.push(episodeData);
      });
    });
  }

}
