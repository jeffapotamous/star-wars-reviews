import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookCharacterService } from '../../../services/book-character.service';

@Component({
  selector: 'app-book-landing',
  templateUrl: './book-landing.component.html',
  styleUrls: ['./book-landing.component.scss']
})
export class BookLandingComponent implements OnInit {

  public characterGroups: any[];

  constructor(private route: ActivatedRoute, private bookCharacterService: BookCharacterService) {
    this.characterGroups = [];
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.params.subscribe((params) => {
      this.characterGroups = this.bookCharacterService.getBookCharactersByBookID(params.code);
    });
  }
}
