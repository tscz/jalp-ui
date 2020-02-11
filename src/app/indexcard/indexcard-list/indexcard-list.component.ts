import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Indexcard } from 'src/app/_interface/indexcard.model';
import { IndexcardService } from 'src/app/shared/indexcard.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-indexcard-list',
  templateUrl: './indexcard-list.component.html',
  styleUrls: ['./indexcard-list.component.css']
})
export class IndexcardListComponent implements OnInit, AfterViewInit {


  public displayedColumns = ['userId', 'id', 'title', 'completed', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Indexcard>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private inexcardService: IndexcardService) { }

  ngOnInit(): void {
    this.getAllIndexcards();
  }

    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
  }

  public getAllIndexcards = () => {
    this.inexcardService.getData('todos').subscribe(res => this.dataSource.data = res as Indexcard[]);
  }

  public redirectToDetails = (id: string) => { };
  public redirectToUpdate = (id: string) => { };
  public redirectToDelete = (id: string) => { };

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
