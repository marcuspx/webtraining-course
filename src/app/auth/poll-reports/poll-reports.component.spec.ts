import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollReportsComponent } from './poll-reports.component';

describe('PollReportsComponent', () => {
  let component: PollReportsComponent;
  let fixture: ComponentFixture<PollReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
