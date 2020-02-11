import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexcardListComponent } from './indexcard-list/indexcard-list.component';
import { IndexcardRoutingModule } from './indexcard-routing/indexcard-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [IndexcardListComponent],
  imports: [
    CommonModule,
    IndexcardRoutingModule,
    MaterialModule
  ]
})
export class IndexcardModule { }
