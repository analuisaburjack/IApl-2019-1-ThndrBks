import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookcaseComponent } from './bookcase/bookcase.component';

const routes: Routes = [
  { path: 'bookcase', component: BookcaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
