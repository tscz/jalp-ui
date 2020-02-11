import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcardDetailsComponent } from './indexcard-details.component';

describe('IndexcardDetailsComponent', () => {
  let component: IndexcardDetailsComponent;
  let fixture: ComponentFixture<IndexcardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexcardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
