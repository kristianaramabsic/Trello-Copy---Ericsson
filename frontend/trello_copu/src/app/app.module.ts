import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListboardsComponent } from './listboards/listboards.component';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './column/column.component';
import { ListColumnsComponent } from './list-columns/list-columns.component';

@NgModule({
  declarations: [
    AppComponent,
    ListboardsComponent,
    BoardComponent,
    ColumnComponent,
    ListColumnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
