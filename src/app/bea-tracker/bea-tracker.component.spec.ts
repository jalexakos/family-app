import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaTrackerComponent } from './bea-tracker.component';

describe('BeaTrackerComponent', () => {
  let component: BeaTrackerComponent;
  let fixture: ComponentFixture<BeaTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
