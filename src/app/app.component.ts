import { Component, OnInit } from '@angular/core';
import { Book, CloneWarsEpisode, Relationship, Tag } from './interfaces/interfaces';
import { BookTagsService } from './services/book-tags.service';
import { BookService } from './services/book.service';
import { CloneWarsEpisodesService } from './services/clone-wars-episodes.service';
import { DatabaseService } from './services/database.service';
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
    private databaseService: DatabaseService,
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
    this.databaseService.loadCloneWarsEpisodes();
    this.databaseService.loadBooks();
    this.databaseService.loadTags();
    this.databaseService.loadBookTagRelationships();

    this.databaseService.cloneWarsEpisodesLoadedRef.subscribe((data: CloneWarsEpisode[]) => {
      this.cloneWarsEpisodesService.setCloneWarsEpisodes(data);
      this.checkIfDoneLoading();
    });

    this.databaseService.booksLoadedRef.subscribe((data: Book[]) => {
      this.bookService.setListOfBooks(data);
      this.checkIfDoneLoading();
    });

    this.databaseService.tagsLoadedRef.subscribe((data: Tag[]) => {
      this.tagService.setTags(data);
      this.checkIfDoneLoading();
    });

    this.databaseService.bookTagRelsLoadedRef.subscribe((data: Relationship[]) => {
      this.bookTagsService.setBookTagRelationships(data);
      this.checkIfDoneLoading();
    });
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
