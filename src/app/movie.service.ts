import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MovieService {
  movies: FirebaseListObservable<any[]>;
  featuredMovie: FirebaseListObservable<any[]>;
  userWatchlist: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.movies = database.list('movies');
    this.featuredMovie = database.list('featured_movie');
    this.userWatchlist = database.list('user/watchlist');
  }

  getMovies() {
    return this.movies;
  }

  getFeaturedMovie() {
    return this.featuredMovie;
  }

  getWatchlist() {
    return this.userWatchlist;
  }

  updateUserWatchlist(watchlistAdditions: any[]) {
    var userData = this.getUser();
    userData.update({ watchlist: watchlistAdditions });
  }

  getUser() {
    return this.database.object('user');
  }
}
