import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**
 * Side navigation.
 */
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent {
  /** Sidenav close output property. */
  @Output()
  sidenavClose = new EventEmitter();

  /** Emit an event in case sidenav close is triggered. */
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
