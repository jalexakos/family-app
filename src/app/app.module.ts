import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { BeaTrackerComponent } from './bea-tracker/bea-tracker.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

// Dependency Injection import for the shared module
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';

//Importing Forms Stuff
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BeaTrackerComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
