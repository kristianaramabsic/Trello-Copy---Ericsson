import { ActivatedRoute, Router } from '@angular/router';
import { ColumnDataService } from './../service/data/column-data.service';
import { Component, OnInit } from '@angular/core';
import { Board } from '../listboards/listboards.component';



export class Column {
  constructor(
    public id: number,
    public name: string
  ) {

  }
}

@Component({
  selector: 'app-list-columns',
  templateUrl: './list-columns.component.html',
  styleUrls: ['./list-columns.component.css']
})
export class ListColumnsComponent implements OnInit {
  boardId: number = 0;
  columns: Column[] = [];

  constructor(
    private columnService: ColumnDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const boardIdParam = params.get('id');
      if (boardIdParam) {
        this.boardId = +boardIdParam;
        this.refreshColumns();
      } else {
        return console.error('Unable to get boardId to display a list of columns')
      }
    });
  }

  refreshColumns() {
    const boardId = this.route.snapshot.params['id']; // Get boardId from route params
    this.columnService.retrieveAllColumns(boardId).subscribe(
      response => {
        console.log(response);
        this.columns = response;
      }
    );
  }

  addColumn() {
    const boardId = this.route.snapshot.params['id']; // Get boardId from route params
    this.router.navigate(['boards', boardId, 'columns', 'add']);
  }

}
