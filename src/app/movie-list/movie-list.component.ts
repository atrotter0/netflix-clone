import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  popularList: Movie[] = Movie.findPopular();
  dramaList: Movie[] = Movie.findByCategory('Drama');
  actionAdventureList: Movie[] = Movie.findByCategory('Action & Adventure');
  scifiFantasyList: Movie[] = Movie.findByCategory('Sci-Fi & Fantasy');
  horrorList: Movie[] = Movie.findByCategory('Horror');
  crimeList: Movie[] = Movie.findByCategory('Crime');
  sportsList: Movie[] = Movie.findByCategory('Sports');
  documentaryList: Movie[] = Movie.findByCategory('Documentary');
  familyList: Movie[] = Movie.findByCategory('Family');
  //myList:
  //watchItAgainList:
  //newReleasesList:
}
