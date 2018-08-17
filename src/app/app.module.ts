import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PopularPickComponent } from './popular-pick/popular-pick.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PopularPickComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
