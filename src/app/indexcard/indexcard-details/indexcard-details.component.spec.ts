import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcardDetailsComponent } from './indexcard-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { IndexcardService } from 'src/app/shared/indexcard.service';
import { of } from 'rxjs';

describe('IndexcardDetailsComponent', () => {
  let component: IndexcardDetailsComponent;
  let fixture: ComponentFixture<IndexcardDetailsComponent>;
  let indexcardServiceStub: Partial<IndexcardService>;


  beforeEach(async(() => {
    indexcardServiceStub = {
        getIndexcard : (route) => {
        return of();
      }
    };

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [IndexcardDetailsComponent],
      providers: [ {provide: IndexcardService, useValue: indexcardServiceStub}]
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
