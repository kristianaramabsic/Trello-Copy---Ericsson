import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ListboardsComponent } from './listboards/listboards.component';
import { ListColumnsComponent } from './list-columns/list-columns.component';
import { ColumnComponent } from './column/column.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'boards', component: ListboardsComponent },
  { path: 'boards/:id', component: ListColumnsComponent },
  { path: 'boards/:id/columns/add', component: ColumnComponent },
  { path: 'boards/edit/:id', component: BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
