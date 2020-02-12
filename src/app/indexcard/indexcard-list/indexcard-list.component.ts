import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Indexcard } from 'src/app/_interface/indexcard.model';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { IndexcardService } from 'src/app/shared/indexcard.service';

@Component({
  selector: 'app-indexcard-list',
  templateUrl: './indexcard-list.component.html',
  styleUrls: ['./indexcard-list.component.css']
})
export class IndexcardListComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['userId', 'id', 'title', 'completed', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Indexcard>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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

  public redirectToDetails = (id: string) => {
    const url = `indexcard/indexcards/${id}`;
    this.router.navigate([url]);
  };
  public redirectToUpdate = (id: string) => {};
  public redirectToDelete = (id: string) => {};

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLowerCase();
  };
}
