import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcardListComponent } from './indexcard-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { IndexcardService } from 'src/app/shared/indexcard.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('IndexcardListComponent', () => {
  let component: IndexcardListComponent;
  let fixture: ComponentFixture<IndexcardListComponent>;
  let indexcardServiceStub: Partial<IndexcardService>;

  beforeEach(async(() => {
    indexcardServiceStub = {
      getIndexcards: () => {
        return of([]);
      }
    };

    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [IndexcardListComponent],
      providers: [{ provide: IndexcardService, useValue: indexcardServiceStub }]
    }).compileComponents();
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
