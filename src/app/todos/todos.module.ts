import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './todos-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from './store/todos.effect';
import { FormsModule } from '@angular/forms';
import { BinComponent } from './bin/bin.component';
import { AddComponent } from './create/add.component';

@NgModule({
  declarations: [HomeComponent, BinComponent, AddComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    StoreModule.forFeature('mytodos', todoReducer),
    EffectsModule.forFeature([BooksEffect])
  ],
})
export class BooksModule {}
