import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Indexcard } from 'src/app/_interface/indexcard.model';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { IndexcardService } from 'src/app/shared/indexcard.service';

/** List of all indexcards. */
@Component({
  selector: 'app-indexcard-list',
  templateUrl: './indexcard-list.component.html',
  styleUrls: ['./indexcard-list.component.css']
})
export class IndexcardListComponent implements OnInit, AfterViewInit {
  /** Columns to be displayed in the indexcard table. */
  static readonly displayedColumns = ['userId', 'id', 'title', 'completed', 'details', 'update', 'delete'];

  /** Datasource for the indexcard table. */
  public dataSource = new MatTableDataSource<Indexcard>();

  /** Sorting element of the view. */
  @ViewChild(MatSort) sort: MatSort;

  /** Paginator element of the view. */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Constructor for an Indexcard list.
   * @param indexcardService
   * @param errorHandlerService
   * @param router
   */
  constructor(
    private indexcardService: IndexcardService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllIndexcards();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Loads all index cards from the server. */
  public getAllIndexcards = () => {
    this.indexcardService.getIndexcards().subscribe(
      res => {
        this.dataSource.data = res;
      },
      error => {
        this.errorHandlerService.handleError(error);
      }
    );
  };

  /** Redirects to display specific indexcard. */
  public redirectToDetails = (id: string) => {
    const url = `indexcard/indexcards/${id}`;
    this.router.navigate([url]);
  };

  /** Redirects to update specific indexcard. */
  public redirectToUpdate = (id: string) => {};

  /** Redirects to delete a specific indexcard. */
  public redirectToDelete = (id: string) => {};

  /** Filter the list of indexcards. */
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLowerCase();
  };
}
