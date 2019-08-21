import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { BallotComponent } from './ballot/ballot.component';
=======
import { NavComponent } from './nav/nav.component';
>>>>>>> 3d3534ac235cecb792676350e2d579e35cf23473

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    BallotComponent
=======
    NavComponent
>>>>>>> 3d3534ac235cecb792676350e2d579e35cf23473
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
