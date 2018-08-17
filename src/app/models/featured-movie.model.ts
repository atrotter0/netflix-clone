import { Movie } from './movie.model';

export class FeaturedMovie {
  constructor(
    public currentFeature: Movie,
    public heroImgUrl: string,
    public movieLogoUrl: string,
    public header: string,
    public description: string
  ) {}

  static featuredMovie: FeaturedMovie = null;

  static setFeaturedMovie(id: string) {
    const movie = Movie.findById(id);
    FeaturedMovie.featuredMovie = new FeaturedMovie(
                                        movie,
                                        './../../assets/img/featured-movie-hero.jpg',
                                        './../../assets/img/featured-movie-logo.jpg',
                                        'Watch Part 1 Now',
                                        'Misadventure is her middle name. Unfortunately, "princess" is her title. A madcap medieval quest from Matt Groening.'
                                      );
  }
}
