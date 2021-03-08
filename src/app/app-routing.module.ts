import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { InputCardComponent } from './components/input-card/input-card.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
