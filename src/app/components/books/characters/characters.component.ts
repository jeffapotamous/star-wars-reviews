import { Component, Input } from '@angular/core';
import { CharactersInfo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  @Input('charactersInfo') charactersInfo: CharactersInfo;

}
