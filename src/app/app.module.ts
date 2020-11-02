import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CloneWarsReviewComponent } from './clone-wars-review/clone-wars-review.component';
import { CloneWarsChronologicalComponent } from './clone-wars-chronological/clone-wars-chronological.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CloneWarsReviewComponent,
    CloneWarsChronologicalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
