import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMovieComponent } from './featured-movie.component';

describe('FeaturedMovieComponent', () => {
  let component: FeaturedMovieComponent;
  let fixture: ComponentFixture<FeaturedMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
