import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnDataService } from '../service/data/column-data.service';
import { Column } from '../list-columns/list-columns.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  boardId: number=0;
  column: Column = new Column(0, ''); // Initialize an empty column

  constructor(
    private columnService: ColumnDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Get the boardId from the route parameters
    this.boardId = +this.route.snapshot.params['id'];
  }

  saveColumn() {
    // Check if column name is provided
    if (!this.column.name) {
      return console.error('Column name not provided');
    }

    // Send a POST request to create a new column for the specified boardId
    this.columnService.createColumn(this.boardId, this.column)
      .subscribe(
        response => {
          console.log('Column created successfully:', response);
          // Redirect to the list of columns for the specific board
          this.router.navigate(['boards', this.boardId]);
        },
        error => {
          console.error('Error creating column:', error);
        }
      );
  }
}
