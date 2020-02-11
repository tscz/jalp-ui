import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TestsComponent } from '../tests/tests.component';
import { CheatsheetsComponent } from '../cheatsheets/cheatsheets.component';
import { PlansComponent } from '../plans/plans.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, //
  { path: 'indexcard', loadChildren: './../indexcard/indexcard.module#IndexcardModule' }, //
  { path: 'tests', component: TestsComponent }, //
  { path: 'cheatsheets', component: CheatsheetsComponent }, //
  { path: 'plans', component: PlansComponent }, //
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
