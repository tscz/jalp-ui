import { Component, OnInit } from '@angular/core';

/**
 * Homepage.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Title of the homepage. */
  readonly title = 'jalp-ui';
}
