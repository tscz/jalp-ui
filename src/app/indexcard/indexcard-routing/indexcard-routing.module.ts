import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexcardListComponent } from '../indexcard-list/indexcard-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'indexcards', component: IndexcardListComponent}
]

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexcardRoutingModule { }
