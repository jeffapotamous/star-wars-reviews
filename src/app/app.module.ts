import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CloneWarsReviewComponent } from './clone-wars-review/clone-wars-review.component';
import { CloneWarsChronologicalComponent } from './clone-wars-chronological/clone-wars-chronological.component';
import { TableComponent } from './utils/table/table.component';

import { TableModule } from 'primeng/table';
import { TableDataClassPipe } from './pipes/table-data-class.pipe';
import { BookSectionComponent } from './utils/book-section/book-section.component';


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
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
