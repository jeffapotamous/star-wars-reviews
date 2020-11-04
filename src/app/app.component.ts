import { Component, OnInit } from '@angular/core';
import { BookTagsService } from './services/book-tags.service';
import { BookService } from './services/book.service';
import { CloneWarsEpisodesService } from './services/clone-wars-episodes.service';
import { TagService } from './services/tag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loading: boolean;
  private currentCount: number;
  private totalFilesToLoadCount: number;

  constructor(
    private cloneWarsEpisodesService: CloneWarsEpisodesService,
    private bookTagsService: BookTagsService,
    private bookService: BookService,
    private tagService: TagService
  ) {
    this.loading = true;
    this.currentCount = 0;
    this.totalFilesToLoadCount = 4;
  }

  ngOnInit() {
    this.cloneWarsEpisodesService.loadCloneWarsEpisodes();
    this.bookService.loadBooks();
    this.tagService.loadTags();
    this.bookTagsService.loadBookTagRelationships();

    this.cloneWarsEpisodesService.cloneWarsEpisodesLoadedRef.subscribe((_data: any) => { this.checkIfDoneLoading() });
    this.bookService.booksLoadedRef.subscribe((_data: any) => { this.checkIfDoneLoading() });
    this.tagService.tagsLoadedRef.subscribe((_data: any) => { this.checkIfDoneLoading() });
    this.bookTagsService.bookTagRelsLoadedRef.subscribe((_data: any) => { this.checkIfDoneLoading() });
  }

  public scroll(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  private checkIfDoneLoading() {
    this.currentCount++;
    if (this.totalFilesToLoadCount === this.currentCount) {
      this.loading = false;
    }
  }
}
