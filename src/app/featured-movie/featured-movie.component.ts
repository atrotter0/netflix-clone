import { Component } from '@angular/core';
import { FeaturedMovie } from '../models/featured-movie.model';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.css']
})
export class FeaturedMovieComponent {
  featuredMovie: FeaturedMovie = FeaturedMovie.currentFeature;
}
