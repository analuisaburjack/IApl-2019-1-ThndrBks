import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookcaseComponent } from './bookcase/bookcase.component';
import { LoginComponent } from './login/login.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  { path: 'library', component: BookcaseComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'films', component: FilmsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
