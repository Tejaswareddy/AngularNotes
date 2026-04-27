import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPages } from './error-pages';

describe('ErrorPages', () => {
  let component: ErrorPages;
  let fixture: ComponentFixture<ErrorPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorPages],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
