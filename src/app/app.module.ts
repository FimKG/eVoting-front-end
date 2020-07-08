import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AppservService } from 'src/app/services/exports';

import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';

import { AdminPanelComponent } from 'src/app/Admin/admin-panel/admin-panel.component';
import { AdminNavigationComponent } from 'src/app/Admin/admin-navigation/admin-navigation.component';
import { AdminRegisterComponent } from 'src/app/Admin/admin-register/admin-register.component';
import { AdminViewComponent } from 'src/app/Admin/admin-view/admin-view.component';
import { AdminCSRCViewsComponent } from 'src/app/Admin/admin-view/admin-CSRC-views/admin-CSRC-views.component';
import { AdminSRCViewComponent } from 'src/app/Admin/admin-view/admin-SRC-view/admin-SRC-view.component';
import { AdminVotesComponent } from 'src/app/Admin/admin-votes/admin-votes.component';
import { AdminLoginComponent } from 'src/app/Admin/admin-login/admin-login.component';

import { HomeComponent } from 'src/app/home/home.component';
import { FooterComponent } from 'src/app/home/footer/footer.component';
import { NavComponent } from 'src/app/home/nav/nav.component';
import { ContactusComponent } from 'src/app/home/contactus/contactus.component';
import { PageNotFoundComponent } from 'src/app/home/404/page-not-found.component';

import { PostvoteComponent } from 'src/app/ballot/postvote/postvote.component';
import { SfcComponent } from 'src/app/ballot/sfc/sfc.component';
import { CsrcComponent } from 'src/app/ballot/csrc/csrc.component';
import { IsrcComponent } from 'src/app/ballot/isrc/isrc.component';
import { BallotComponent } from 'src/app/ballot/ballot.component';

@NgModule({
  declarations: [

    AppComponent,

    LoginComponent, RegisterComponent,

    NavComponent, FooterComponent, HomeComponent, ContactusComponent, PageNotFoundComponent,

    AdminNavigationComponent, AdminRegisterComponent, AdminViewComponent, AdminLoginComponent, AdminVotesComponent, AdminPanelComponent, 
    AdminCSRCViewsComponent , AdminSRCViewComponent,

    PostvoteComponent, SfcComponent, CsrcComponent, IsrcComponent, BallotComponent
    

  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // GoogleChartsModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
  ],

  providers: [

    AppservService, LoginComponent, RegisterComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
