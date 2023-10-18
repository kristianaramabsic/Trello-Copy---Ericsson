import { BoardDataService } from './../service/data/board-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export class Board {
  constructor(
    public id: number,
    public description: string,
  ) {

  }
}

@Component({
  selector: 'app-listboards',
  templateUrl: './listboards.component.html',
  styleUrls: ['./listboards.component.css']
})
export class ListboardsComponent implements OnInit {

  boards: Board[] = [];

  message: string = '';

  constructor(
    private boardService: BoardDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshBoards();
  }

  refreshBoards() {
    this.boardService.retrieveAllBoards().subscribe(
      response => {
        console.log(response);
        this.boards = response;
      }
    )
  }

  updateBoard(id: number) {
    console.log(`update ${id}`)
    this.router.navigate(['boards/edit', id])
  }

  addBoard() {
    this.router.navigate(['boards/edit', -1])
  }

}


