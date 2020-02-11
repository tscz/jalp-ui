import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexcardListComponent } from './indexcard-list/indexcard-list.component';
import { IndexcardRoutingModule } from './indexcard-routing/indexcard-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [IndexcardListComponent],
  imports: [
    CommonModule,
    IndexcardRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class IndexcardModule { }
