import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcardListComponent } from './indexcard-list.component';

describe('IndexcardListComponent', () => {
  let component: IndexcardListComponent;
  let fixture: ComponentFixture<IndexcardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexcardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
