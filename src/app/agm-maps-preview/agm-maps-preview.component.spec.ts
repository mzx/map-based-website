import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmMapsPreviewComponent } from './agm-maps-preview.component';

describe('AgmMapsPreviewComponent', () => {
  let component: AgmMapsPreviewComponent;
  let fixture: ComponentFixture<AgmMapsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmMapsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmMapsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
