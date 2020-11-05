import { Component, OnInit } from '@angular/core';
import { CloneWarsEpisode, TableColumn, Tag } from '../interfaces/interfaces';
import { CloneWarsEpisodesService } from '../services/clone-wars-episodes.service';
import { CwTagsService } from '../services/cw-tags.service';
import { TagService } from '../services/tag.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-clone-wars-review',
  templateUrl: './clone-wars-review.component.html',
  styleUrls: ['./clone-wars-review.component.scss']
})
export class CloneWarsReviewComponent implements OnInit {

  /* ----- Tags ----- */
  public tags: Tag[];

  /* ----- Table ----- */
  public tableColumns: TableColumn[];
  public tableData: any[];
  private tableDataCopy: any[];

  constructor(private cloneWarsEpisodesService: CloneWarsEpisodesService, private tagService: TagService, private cwTagsService: CwTagsService, private utilsService: UtilsService) {
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
    this.cloneWarsEpisodesService.getCloneWarsEpisodes().forEach((episode: CloneWarsEpisode, index: number) => {
      const episodeData: any = episode;
      episodeData.disneyPlus = { image: 'assets/images/icon.png', link: episodeData.link, class: 'disney-logo' };
      episodeData.rankOrder = index + 1;

      this.tableData.push(episodeData);
    });
    this.tableDataCopy = this.tableData;

    this.tags = this.tagService.getTags();
  }

  public filterTable(input: any) {
    if (input.target.value === 'null') {
      this.tableData = this.tableDataCopy;
    } else {
      this.tableData = this.cwTagsService.getCloneWarsEpisodesByTag(parseInt(input.target.value));
    }
  }

}
