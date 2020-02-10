import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocablesComponent } from './vocables.component';

describe('VocablesComponent', () => {
  let component: VocablesComponent;
  let fixture: ComponentFixture<VocablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
