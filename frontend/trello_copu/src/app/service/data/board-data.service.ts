import { BOARD_JPA_API_URL } from '../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from '../../listboards/listboards.component';

@Injectable({
  providedIn: 'root'
})
export class BoardDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllBoards() {
    return this.http.get<Board[]>(`${BOARD_JPA_API_URL}/boards`);
  }

  retrieveBoard(id: number) {
    return this.http.get<Board>(`${BOARD_JPA_API_URL}/boards/${id}`);
  }

  updateBoard(id: number, board: Board) {
    return this.http.put(
      `${BOARD_JPA_API_URL}/boards/${id}`
      , board);
  }

  createBoard(board: Board) {
    return this.http.post(
      `${BOARD_JPA_API_URL}/boards`
      , board);
  }

}
