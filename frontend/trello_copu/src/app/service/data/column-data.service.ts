import { BOARD_JPA_API_URL } from '../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../../listboards/listboards.component';
import { Column } from '../../list-columns/list-columns.component';

@Injectable({
  providedIn: 'root'
})
export class ColumnDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllColumns(boardId: number) {
    return this.http.get<Column[]>(`${BOARD_JPA_API_URL}/boards/${boardId}/columns`);
  }

  retrieveColumn(boardId: number, columnId: number): Observable<Column> {
    return this.http.get<Column>(`${BOARD_JPA_API_URL}/boards/${boardId}/columns/${columnId}`);
  }

  createColumn(boardId: number, column: Column): Observable<Column> {
    return this.http.post<Column>(`${BOARD_JPA_API_URL}/boards/${boardId}/columns`, column);
  }

  updateColumn(boardId: number, columnId: number, column: Column): Observable<any> {
    return this.http.put(`${BOARD_JPA_API_URL}/boards/${boardId}/columns/${columnId}`, column);
  }
}
