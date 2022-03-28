import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeOverlayComponent } from './practice-overlay.component';

describe('PracticeOverlayComponent', () => {
  let component: PracticeOverlayComponent;
  let fixture: ComponentFixture<PracticeOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
