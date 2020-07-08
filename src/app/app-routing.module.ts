import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppservService } from 'src/app/services/exports';
import { Role } from 'src/app/services/models/role';


import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';

import { AdminPanelComponent } from 'src/app/Admin/admin-panel/admin-panel.component';
import { AdminNavigationComponent } from 'src/app/Admin/admin-navigation/admin-navigation.component';
import { AdminRegisterComponent } from 'src/app/Admin/admin-register/admin-register.component';
import { AdminViewComponent } from 'src/app/Admin/admin-view/admin-view.component';
import { AdminVotesComponent } from 'src/app/Admin/admin-votes/admin-votes.component';
import { AdminCSRCViewsComponent } from './Admin/admin-view/admin-CSRC-views/admin-CSRC-views.component';
import { AdminSRCViewComponent } from './Admin/admin-view/admin-SRC-view/admin-SRC-view.component';
import { PostvoteComponent } from 'src/app/ballot/postvote/postvote.component';

import { PageNotFoundComponent } from 'src/app/home/404/page-not-found.component';
//Ballot
import { BallotComponent } from 'src/app/ballot/ballot.component';
import { SfcComponent } from 'src/app/ballot/sfc/sfc.component';
import { CsrcComponent } from 'src/app/ballot/csrc/csrc.component';
import { IsrcComponent } from 'src/app/ballot/isrc/isrc.component';
import { AdminLoginComponent } from 'src/app/Admin/admin-login/admin-login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'votes', component: BallotComponent },

  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'adminpanel', component: AdminPanelComponent },
  { path: 'adminnavigation', component: AdminNavigationComponent },
  { path: 'adminregister', component: AdminRegisterComponent },
  { path: 'viewisrc', component: AdminSRCViewComponent },
  { path: 'viewcsrc', component: AdminCSRCViewsComponent },
  { path: 'adminvotes', component: AdminVotesComponent },
  { path: 'adminview', component: AdminViewComponent },

  //  https://jasonwatmore.com/post/2018/11/22/angular-7-role-based-authorization-tutorial-with-example 
  // role based authorization

  // { path: 'adminlogin', component: AdminLoginComponent },
  // { path: 'adminpanel', component: AdminPanelComponent, canActivate: [AppservService], data: { roles: ['Admin'] },
  // { path: 'adminnavigation', component: AdminNavigationComponent, canActivate: [AppservService], data: { roles: [Role.Admin] },
  // { path: 'adminregister', component: AdminRegisterComponent, canActivate: [AppservService], data: { roles: [Role.Admin] },
  // { path: 'viewisrc', component: AdminSRCViewComponent, canActivate: [AppservService], data: { roles: [Role.Admin] },
  // { path: 'viewcsrc', component: AdminCSRCViewsComponent, canActivate: [AppservService], data: { roles: [Role.Admin] },
  // { path: 'adminvotes', component: AdminVotesComponent, canActivate: [AppservService], data: { roles: [Role.Admin] },
  // { path: 'adminview', component: AdminViewComponent, canActivate: [AppservService], data: { roles: [Role.Admin] },

  { path: 'postvote', component: PostvoteComponent, canActivate: [AppservService] },
  { path: 'sfc', component: SfcComponent, canActivate: [AppservService] },
  { path: 'ballot', component: IsrcComponent, canActivate: [AppservService] },
  { path: 'csrc', component: CsrcComponent, canActivate: [AppservService] },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
