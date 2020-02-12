import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Indexcard } from 'src/app/_interface/indexcard.model';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { IndexcardService } from 'src/app/shared/indexcard.service';

/**
 * Represents exactly one indexcard including all details.
 */
@Component({
  selector: 'app-indexcard-details',
  templateUrl: './indexcard-details.component.html',
  styleUrls: ['./indexcard-details.component.css']
})
export class IndexcardDetailsComponent implements OnInit {
  /** The indexcard data. */
  public indexcard: Indexcard;

  /**
   * Constructor of a Details component
   * @param indexcardService
   * @param router
   * @param activeRoute
   * @param errorHandler
   */
  constructor(
    private indexcardService: IndexcardService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.getIndexcardDetails();
  }

  /**
   * Redirects to the overview of all indexcards.
   */
  public redirectToOverview = () => {
    const url = `/indexcard/indexcards`;
    this.router.navigate([url]);
  };

  private getIndexcardDetails = () => {
    const id: string = this.activeRoute.snapshot.params.id;

    this.indexcardService.getIndexcard(id).subscribe(
      res => {
        this.indexcard = res;
      },
      error => {
        this.errorHandler.handleError(error);
      }
    );
  };
}
