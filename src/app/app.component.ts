import { Component, OnInit } from '@angular/core';
import { CloneWarsEpisodesService } from './services/clone-wars-episodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cloneWarsEpisodesService: CloneWarsEpisodesService) {}

  ngOnInit() {
    this.cloneWarsEpisodesService.loadData();
  }

  public scroll(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
