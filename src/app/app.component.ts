import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public scroll(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
