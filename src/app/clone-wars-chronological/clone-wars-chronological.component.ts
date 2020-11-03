import { Component, OnInit } from '@angular/core';
import { CloneWarsEpisode } from '../interfaces/interfaces';
import { CloneWarsEpisodesService } from '../services/clone-wars-episodes.service';

@Component({
  selector: 'app-clone-wars-chronological',
  templateUrl: './clone-wars-chronological.component.html',
  styleUrls: ['./clone-wars-chronological.component.scss']
})
export class CloneWarsChronologicalComponent implements OnInit {

  public chronologicalEpisodes: CloneWarsEpisode[];

  constructor(private cloneWarsEpisodesService: CloneWarsEpisodesService) { }

  ngOnInit(): void {
    this.chronologicalEpisodes = this.cloneWarsEpisodesService.getCloneWarsEpisodesChronological();
  }

}
