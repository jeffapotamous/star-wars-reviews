import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-book-section',
  templateUrl: './book-section.component.html',
  styleUrls: ['./book-section.component.scss']
})
export class BookSectionComponent {

  @Input('rankingClass') rankingClass: string;
  @Input('booksList') booksList: any;
  @Input('headerClass') headerClass: string;

  constructor(private router: Router) { }

  public route(book: Book) {
    if (book.hasCharacterSection) {
      this.router.navigate(['/book', book.id]);
    }
  }

}
