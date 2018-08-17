import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PopularPickComponent } from './popular-pick/popular-pick.component';
import { FeaturedMovieComponent } from './featured-movie/featured-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PopularPickComponent,
    FeaturedMovieComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
