import { Movie } from './movie.model';

export class FeaturedMovie {
  constructor(
    public currentFeature: Movie,
    public heroImgUrl: string,
    public movieLogoUrl: string,
    public header: string,
    public description: string
  ) {}
}
