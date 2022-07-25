import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBurgerComponent } from './show-burger.component';

describe('ShowBurgerComponent', () => {
  let component: ShowBurgerComponent;
  let fixture: ComponentFixture<ShowBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
