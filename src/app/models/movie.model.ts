export class Movie {
  constructor(
    public type: string,
    public genre: string,
    public title: string,
    public rating: string,
    public length: string,
    public popular: boolean,
    public imgUrl: string
  ) {}

  static movieList = {
    disenchantment: new Movie('show', 'Comedy', 'Disenchantment', 'TV-14', '1 Part', true, './../../assets/img/thumbnails/disenchanted.jpg'),
    theDeparted: new Movie('movie', 'Drama', 'The Departed', 'R', '2h 31m', false, './../../assets/img/thumbnails/the-departed.jpg'),
    theOffice: new Movie('show', 'Comedy', 'The Office', 'TV-14', '9 Seasons', true, './../../assets/img/thumbnails/the-office.jpg'),
    theDarkKnight: new Movie('movie', 'Action & Adventure', 'The Dark Knight', 'PG-13', '2h 32m', true, './../../assets/img/thumbnails/the-dark-knight.jpg'),
    guardians2: new Movie('movie', 'Action & Adventure', 'Guardians of the Galaxy Vol. 2', 'PG-13', '2h 16m', true, './../../assets/img/thumbnails/guardians-vol-2.jpg'),
    portlandia: new Movie('show', 'Comedy', 'Portlandia', 'TV-14', '8 Seasons', true, './../../assets/img/thumbnails/portlandia.jpg'),
    lotrFellowship: new Movie('movie', 'Sci-Fi & Fantasy', 'Lord of the Rings: The Fellowship of the Ring', 'PG-13', '2h 58m', true, './../../assets/img/thumbnails/lotr-fellowship.jpg')
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

  static findPopular() {
    const matches = [];
    const movieIds = Object.keys(Movie.movieList); 
    movieIds.forEach((id) => {
      if (Movie.movieList[id].popular) {
        matches.push(Movie.movieList[id]);
      }
    });
    return matches;
  }

  static findByCategory(category: string) {
    const matches = [];
    const movieIds = Object.keys(Movie.movieList); 
    movieIds.forEach((id) => {
      if (Movie.movieList[id].category === category) {
        matches.push(Movie.movieList[id]);
      }
    });
    return matches;
  }
}
