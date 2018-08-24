import { Component, OnInit } from '@angular/core';
import { FeaturedMovie } from '../models/featured-movie.model';
import { MovieService } from '../movie.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.css'],
  providers: [MovieService]
})
export class FeaturedMovieComponent implements OnInit {
  featuredMovie: FirebaseListObservable<any[]>;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.featuredMovie = this.movieService.getFeaturedMovie();
    console.log(this.featuredMovie);
  }
}
