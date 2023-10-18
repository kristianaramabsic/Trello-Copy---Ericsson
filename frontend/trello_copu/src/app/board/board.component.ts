import { ActivatedRoute, Router } from '@angular/router';
import { BoardDataService } from './../service/data/board-data.service';
import { Component, OnInit } from '@angular/core';
import { Board } from '../listboards/listboards.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  id: number = 0;
  board: Board = new Board(this.id, '');

  constructor(
    private boardService: BoardDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.board = new Board(this.id, '');

    if (this.id != -1) {
      this.boardService.retrieveBoard(this.id)
        .subscribe(
          data => this.board = data
        )
    }
  }

  saveBoard() {
    if (this.id == -1) { //=== ==
      this.boardService.createBoard(this.board)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['boards'])
          }
        )
    } else {
      this.boardService.updateBoard(this.id, this.board)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['boards'])
          }
        )
    }
  }

}
