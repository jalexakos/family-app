import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeaTrackerComponent } from './bea-tracker/bea-tracker.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [

  {
    path: 'bea-tracker', component: BeaTrackerComponent
  },
  {
    path: 'shopping-list', component: ShoppingListComponent
  },
  {
    path: 'news', component: SportsComponent
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
