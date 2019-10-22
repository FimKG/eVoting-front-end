import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BallotComponent } from './ballot/ballot.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './home/nav/nav.component';
import { RegisterComponent } from './register/register.component';

import { AppservService } from './appserv.service';
import { AlertService } from './_services'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { AdminNavigationComponent } from './Admin/admin-navigation/admin-navigation.component';
import { AdminRegisterComponent } from './Admin/admin-register/admin-register.component';
import { AdminViewComponent } from './Admin/admin-view/admin-view.component';
import { AdminVotesComponent } from './Admin/admin-votes/admin-votes.component';
import { PostvoteComponent } from './ballot/postvote/postvote.component';
import { SfcComponent } from './ballot/sfc/sfc.component';
import { CsrcComponent } from './ballot/csrc/csrc.component';
import { IsrcComponent } from './ballot/isrc/isrc.component';
// import { AdminServiceComponent } from './_services';
import { Nav1Component } from './home/nav1/nav1.component';
import { Nav2Component } from './home/nav2/nav2.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ContactusComponent } from './home/contactus/contactus.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BallotComponent,
    AdminPanelComponent,

    NavComponent,
    Nav1Component,
    Nav2Component,
    FooterComponent,

    HomeComponent,
    AdminNavigationComponent,
    AdminRegisterComponent,
    AdminViewComponent,
    AdminVotesComponent,
    PostvoteComponent,
    SfcComponent,
    CsrcComponent,
    IsrcComponent,
    AdminLoginComponent,
    ContactusComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],

  providers: [
    AlertService,
    AppservService,
    LoginComponent,
    NavComponent
    // ====================================================================================
    ,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    // ====================================================================================
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


