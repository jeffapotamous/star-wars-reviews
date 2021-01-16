import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-section',
  templateUrl: './book-section.component.html',
  styleUrls: ['./book-section.component.scss']
})
export class BookSectionComponent {

  @Input('rankingClass') rankingClass: string;
  @Input('booksList') booksList: any;
  @Input('headerClass') headerClass: string;

  constructor() { }

}
