import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinComponent } from './bin/bin.component';
import { AddComponent } from './create/add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
    {
      path: 'bin',
      component: BinComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
