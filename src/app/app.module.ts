import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookReviewComponent } from './components/books/book-review/books.component'
import { CloneWarsReviewComponent } from './components/clone-wars-review/clone-wars-review.component';
import { CloneWarsChronologicalComponent } from './components/clone-wars-chronological/clone-wars-chronological.component';
import { TableComponent } from './utils/table/table.component';

import { TableModule } from 'primeng/table';
import { TableDataClassPipe } from './pipes/table-data-class.pipe';
import { BookSectionComponent } from './components/books/book-section/book-section.component';
import { CharactersComponent } from './components/books/characters/characters.component';
import { CharacterGroupComponent } from './components/books/character-group/character-group.component';
import { BookLandingComponent } from './components/books/book-landing/book-landing.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'book/:code', component: BookLandingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BookReviewComponent,
    CloneWarsReviewComponent,
    CloneWarsChronologicalComponent,
    TableComponent,
    TableDataClassPipe,
    BookSectionComponent,
    CharactersComponent,
    CharacterGroupComponent,
    BookLandingComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
