import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { IndexcardDetailsComponent } from './indexcard-details/indexcard-details.component';
import { IndexcardListComponent } from './indexcard-list/indexcard-list.component';
import { IndexcardRoutingModule } from './indexcard-routing/indexcard-routing.module';

@NgModule({
  declarations: [IndexcardListComponent, IndexcardDetailsComponent],
  imports: [CommonModule, IndexcardRoutingModule, MaterialModule, FlexLayoutModule]
})
export class IndexcardModule {}
