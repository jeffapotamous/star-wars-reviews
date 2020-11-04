import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CloneWarsReviewComponent } from './clone-wars-review/clone-wars-review.component';
import { CloneWarsChronologicalComponent } from './clone-wars-chronological/clone-wars-chronological.component';
import { TableComponent } from './utils/table/table.component';

import { TableModule } from 'primeng/table';
import { TableDataClassPipe } from './pipes/table-data-class.pipe';
import { BookSectionComponent } from './utils/book-section/book-section.component';
import { APP_INITIALIZER } from '@angular/core';
import { BookTagsService } from './services/book-tags.service';
import { CloneWarsEpisodesService } from './services/clone-wars-episodes.service';
import { BookService } from './services/book.service';
import { TagService } from './services/tag.service';

const bookTagServiceLoad = (bookTagsService: BookTagsService) => {
  return () => { return bookTagsService.loadBookTagRelationships(); };
};

const cloneWarsServiceLoad = (cloneWarsEpisodesService: CloneWarsEpisodesService) => {
  return () => { return cloneWarsEpisodesService.loadData(); };
};

const bookServiceLoad = (bookService: BookService) => {
  return () => { return bookService.loadBooks(); };
};

const tagServiceLoad = (tagService: TagService) => {
  return () => { return tagService.loadTags(); };
};

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CloneWarsReviewComponent,
    CloneWarsChronologicalComponent,
    TableComponent,
    TableDataClassPipe,
    BookSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: bookTagServiceLoad,
      multi: true,
      deps: [BookTagsService]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: cloneWarsServiceLoad,
      multi: true,
      deps: [CloneWarsEpisodesService]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: bookServiceLoad,
      multi: true,
      deps: [BookService]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: tagServiceLoad,
      multi: true,
      deps: [TagService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
