import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatComponent } from './donat.component';

describe('DonatComponent', () => {
  let component: DonatComponent;
  let fixture: ComponentFixture<DonatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
