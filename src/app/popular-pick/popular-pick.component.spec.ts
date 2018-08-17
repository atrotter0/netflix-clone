import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPickComponent } from './popular-pick.component';

describe('PopularPickComponent', () => {
  let component: PopularPickComponent;
  let fixture: ComponentFixture<PopularPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
