export class Movie {
  constructor(
    public type: string,
    public genre: string,
    public title: string,
    public rating: string,
    public length: string,
    public popular: boolean,
    public imgUrl: string,
    public featuredMovie: boolean
  ) {}
}
