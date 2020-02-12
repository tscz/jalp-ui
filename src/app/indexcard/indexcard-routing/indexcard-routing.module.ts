import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexcardDetailsComponent } from '../indexcard-details/indexcard-details.component';
import { IndexcardListComponent } from '../indexcard-list/indexcard-list.component';

const routes: Routes = [
  { path: 'indexcards', component: IndexcardListComponent },
  { path: 'indexcards/:id', component: IndexcardDetailsComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class IndexcardRoutingModule {}
