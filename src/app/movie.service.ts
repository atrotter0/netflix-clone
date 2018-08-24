import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MovieService {
  movies: FirebaseListObservable<any[]>;
  featuredMovie: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.movies = database.list('movies');
    this.featuredMovie = database.list('featured_movie');
  }

  getMovies() {
    return this.movies;
  }

  getFeaturedMovie() {
    return this.featuredMovie;
  }
}
