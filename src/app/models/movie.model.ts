export class Movie {
  constructor(
    public type: string,
    public genre: string,
    public title: string,
    public rating: string,
    public length: string
  ) {}

  static movieList = {
    disenchantment: new Movie('show', 'Comedy', 'Disenchantment', 'TV-14', '1 Part'),
    theDeparted: new Movie('movie', 'Drama', 'The Departed', 'R', '2h 31m')
  };

  static findById(id: string) {
    return Movie.movieList[id];
  }

  static findByTitle(title: string) {
    const matches = [];
    const movieIds = Object.keys(Movie.movieList); 
    movieIds.forEach((id) => {
      if (Movie.movieList[id].title === title) {
        matches.push(Movie.movieList[id]);
      }
    });
    return matches;
  }
}
