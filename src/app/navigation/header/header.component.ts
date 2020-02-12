import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/** Header of the app. */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /** Sidenav toggle output property. */
  @Output()
  private sidenavToggle = new EventEmitter();

  /** Emit an event in case sidenav toggle is triggered. */
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
