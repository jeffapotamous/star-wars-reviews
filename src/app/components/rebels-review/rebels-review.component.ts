import { Component, OnInit } from '@angular/core';
import { RebelsEpisodesService } from '../../services/rebels-episodes.service';
import { TableColumn, TvEpisode } from '../../interfaces/interfaces';

@Component({
  selector: 'app-rebels-review',
  templateUrl: './rebels-review.component.html',
  styleUrls: ['./rebels-review.component.scss']
})
export class RebelsReviewComponent implements OnInit {
  /* ----- Table ----- */
  public tableColumns: TableColumn[];
  public tableData: any[];

  constructor(private rebelsEpisodesService: RebelsEpisodesService) {
    this.tableColumns = [
      { header: 'Season', field: 'season', sort: true, style: { width: '100px', align: 'right' }, classCompare: 'season' },
      { header: 'Episode', field: 'episode', sort: false, style: { width: '100px', align: 'right' } },
      { header: 'Name', field: 'name', sort: true },
      { header: 'Rank', field: 'rankOrder', sort: true, style: { width: '100px', align: 'right' }, classCompare: 'rebels-rank' },
      { header: 'Release Order', field: 'releaseOrder', sort: true, style: { width: '150px', align: 'right' } },
      { header: 'Disney+', field: 'disneyPlus', sort: false, style: { width: '100px', align: 'center' }, type: 'linkIcon' },
    ];
    this.tableData = [];
  }

  ngOnInit(): void {
    this.rebelsEpisodesService.getRebelsEpisodes().forEach((episode: TvEpisode, index: number) => {
      const episodeData: any = episode;
      episodeData.disneyPlus = { image: 'assets/images/icon.png', link: episodeData.link, class: 'disney-logo' };
      episodeData.rankOrder = index;

      this.tableData.push(episodeData);
    });
  }

}
