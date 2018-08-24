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
  featureAdded: boolean;
  watchlist: FirebaseListObservable<any[]>;
  watchlistAdditions: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.featuredMovie = this.movieService.getFeaturedMovie();
    this.watchlist = this.movieService.getWatchlist();
    this.setFeatureAdded();
  }

  setFeatureAdded() {
    var featureData;
    var watchlistData;
    this.featuredMovie.subscribe((data) => {
      featureData = data[0];
    });
    this.watchlist.subscribe((data) => {
      watchlistData = data[0];

      if (this.dataMatches(watchlistData, featureData)) { this.featureAdded = true; }
    });
  }

  dataMatches(watchlistData, featureData) {
    return (watchlistData !== undefined && featureData.id === watchlistData.id);
  }

  addToWatchlist(movie) {
    this.featureAdded = true;
    this.watchlistAdditions.push(movie);
    this.movieService.updateUserWatchlist(this.watchlistAdditions);
    this.movieService.getWatchlist();
  }

  removeFromWatchlist(movie) {
    this.featureAdded = false;
    const index: number = this.watchlistAdditions.indexOf(movie);
    this.watchlistAdditions.splice(index, 1);
    this.movieService.updateUserWatchlist(this.watchlistAdditions);
    this.movieService.getWatchlist();
  }
}
