import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { TestsComponent } from './tests/tests.component';
import { CheatsheetsComponent } from './cheatsheets/cheatsheets.component';
import { PlansComponent } from './plans/plans.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexcardModule } from './indexcard/indexcard.module';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    TestsComponent,
    CheatsheetsComponent,
    PlansComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,
    IndexcardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
