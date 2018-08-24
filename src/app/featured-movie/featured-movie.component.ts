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
  watchlist: FirebaseListObservable<any[]>;
  watchlistAdditions: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.featuredMovie = this.movieService.getFeaturedMovie();
    this.watchlist = this.movieService.getWatchlist();
  }

  addToWatchlist(movie) {
    this.watchlistAdditions.push(movie);
    this.movieService.updateUserWatchlist(this.watchlistAdditions);
    this.movieService.getWatchlist();
  }
}
