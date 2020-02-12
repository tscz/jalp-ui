import { Component, OnInit } from '@angular/core';
import { Indexcard } from 'src/app/_interface/indexcard.model';
import { IndexcardService } from 'src/app/shared/indexcard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';

@Component({
  selector: 'app-indexcard-details',
  templateUrl: './indexcard-details.component.html',
  styleUrls: ['./indexcard-details.component.css']
})
export class IndexcardDetailsComponent implements OnInit {

  public indexcard: Indexcard;

  constructor(
    private indexcardService: IndexcardService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.getIndexcardDetails();
  }

  public redirectToOverview = () => {
    const url = `/indexcard/indexcards`;
    this.router.navigate([url]);
  }

  private getIndexcardDetails = () => {
    const id: string = this.activeRoute.snapshot.params.id;

    this.indexcardService.getIndexcard(id).subscribe(
      res => { this.indexcard = res; },
      error => { this.errorHandler.handleError(error); }
    );
  }

}
