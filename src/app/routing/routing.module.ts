import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TestsComponent } from '../tests/tests.component';
import { CheatsheetsComponent } from '../cheatsheets/cheatsheets.component';
import { PlansComponent } from '../plans/plans.component';
import { NotFoundComponent } from '../error-pages/not-found/not-found.component';
import { ServerErrorComponent } from '../error-pages/server-error/server-error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, //
  { path: 'indexcard', loadChildren: './../indexcard/indexcard.module#IndexcardModule' }, //
  { path: 'tests', component: TestsComponent }, //
  { path: 'cheatsheets', component: CheatsheetsComponent }, //
  { path: 'plans', component: PlansComponent }, //
  { path: '404', component: NotFoundComponent }, //
  { path: '500', component: ServerErrorComponent }, //
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class RoutingModule {}
