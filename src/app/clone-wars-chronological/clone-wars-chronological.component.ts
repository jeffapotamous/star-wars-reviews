import { Component, OnInit } from '@angular/core';
import { CloneWarsEpisodesService } from '../services/clone-wars-episodes.service';

@Component({
  selector: 'app-clone-wars-chronological',
  templateUrl: './clone-wars-chronological.component.html',
  styleUrls: ['./clone-wars-chronological.component.css']
})
export class CloneWarsChronologicalComponent implements OnInit {

  constructor(private cloneWarsEpisodesService: CloneWarsEpisodesService) { }

  ngOnInit(): void {
	  console.log(this.cloneWarsEpisodesService.getCloneWarsEpisodes());
  }

}
