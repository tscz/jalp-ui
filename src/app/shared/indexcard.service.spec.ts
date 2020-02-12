import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IndexcardService } from './indexcard.service';

describe('IndexcardService', () => {
  let service: IndexcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IndexcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
