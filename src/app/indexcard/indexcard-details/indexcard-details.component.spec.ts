import { HttpErrorResponse } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { Indexcard } from 'src/app/_interface/indexcard.model';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { IndexcardService } from 'src/app/shared/indexcard.service';
import { IndexcardDetailsComponent } from './indexcard-details.component';

describe('IndexcardDetailsComponent', () => {
  const TEST_INDEXCARD: Indexcard = { id: 1, userId: 1, completed: true, title: 'This is a test' };

  let component: IndexcardDetailsComponent;
  let fixture: ComponentFixture<IndexcardDetailsComponent>;

  let indexcardService: jasmine.SpyObj<IndexcardService>;
  let errorHandler: jasmine.SpyObj<ErrorHandlerService>;
  let router: Router;

  beforeEach(async(() => {
    indexcardService = jasmine.createSpyObj<IndexcardService>(['getIndexcard']);
    errorHandler = jasmine.createSpyObj<ErrorHandlerService>(['handleError']);
    router = jasmine.createSpyObj<Router>(['navigate']);

    TestBed.configureTestingModule({
      imports: [],
      declarations: [IndexcardDetailsComponent],
      providers: [
        { provide: IndexcardService, useValue: indexcardService },
        { provide: ErrorHandlerService, useValue: errorHandler },
        { provide: Router, useValue: router },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '' + TEST_INDEXCARD.id } } } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcardDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have indexcard details after construction', () => {
    expect(component.indexcard).toBeFalsy();
  });

  it('should have indexcard details after initialisation', () => {
    indexcardService.getIndexcard.and.returnValue(of(TEST_INDEXCARD));

    fixture.detectChanges();

    expect(component.indexcard).toEqual(TEST_INDEXCARD);
  });

  it('should report an error in case service api returns an error', () => {
    const error404 = new HttpErrorResponse({
      error: '404 error',
      status: 404,
      statusText: 'Not Found'
    });
    indexcardService.getIndexcard.and.returnValue(throwError(error404));

    fixture.detectChanges();

    expect(indexcardService.getIndexcard).toHaveBeenCalledTimes(1);
    expect(indexcardService.getIndexcard).toHaveBeenCalledWith('1');
    expect(component.indexcard).toBeFalsy();
    expect(errorHandler.handleError).toHaveBeenCalledTimes(1);
    expect(errorHandler.handleError).toHaveBeenCalledWith(error404);
  });

  it('should be able to redirect to the list of indexcards', () => {
    component.redirectToOverview();

    expect(router.navigate).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledWith(['/indexcard/indexcards']);
  });
});
