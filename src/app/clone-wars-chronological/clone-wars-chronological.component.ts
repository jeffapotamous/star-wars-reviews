import { Component, OnInit } from '@angular/core';
import { CloneWarsEpisode } from '../interfaces/interfaces';
import { BookTagsService } from '../services/book-tags.service';
import { CloneWarsEpisodesService } from '../services/clone-wars-episodes.service';

@Component({
  selector: 'app-clone-wars-chronological',
  templateUrl: './clone-wars-chronological.component.html',
  styleUrls: ['./clone-wars-chronological.component.scss']
})
export class CloneWarsChronologicalComponent implements OnInit {

  public chronologicalEpisodes: CloneWarsEpisode[];

  private list = [];

  constructor(private cloneWarsEpisodesService: CloneWarsEpisodesService, private bookTagsService: BookTagsService) { }

  ngOnInit(): void {
    this.cloneWarsEpisodesService.cloneWarsEpisodesLoadedRef.subscribe((_data: any) => {
      this.chronologicalEpisodes = this.cloneWarsEpisodesService.getCloneWarsEpisodesChronological();
    });
  }

  public add(input) {
    this.list.push(input.id);
  }

  public print() {
    console.log(this.list);
  }

}
