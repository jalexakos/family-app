import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeaTrackerComponent } from './bea-tracker/bea-tracker.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [

  {
    path: 'bea-tracker', component: BeaTrackerComponent
  },
  {
    path: 'shopping-list', component: ShoppingListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
