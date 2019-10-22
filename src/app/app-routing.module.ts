import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// =================================================
import { AuthGuard } from './_helpers';
// =================================================
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './home/contactus/contactus.component';

import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';

import { AdminNavigationComponent } from './Admin/admin-navigation/admin-navigation.component';
import { AdminRegisterComponent } from './Admin/admin-register/admin-register.component';
import { AdminViewComponent } from './Admin/admin-view/admin-view.component';
import { AdminVotesComponent } from './Admin/admin-votes/admin-votes.component';
import { PostvoteComponent } from './ballot/postvote/postvote.component';
//Ballot
import { BallotComponent } from './ballot/ballot.component';
import { SfcComponent } from './ballot/sfc/sfc.component';
import { CsrcComponent } from './ballot/csrc/csrc.component';
import { IsrcComponent } from './ballot/isrc/isrc.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';

const routes: Routes = [
  // =================================================
// , canActivate: [AuthGuard]
// =================================================
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'contactus', component: ContactusComponent},

  { path: 'adminlogin', component: AdminLoginComponent },
  
  { path: 'adminpanel', component: AdminPanelComponent },
  { path: 'adminnavigation', component: AdminNavigationComponent },
  { path: 'adminregister', component: AdminRegisterComponent },
  { path: 'adminview', component: AdminViewComponent },
  { path: 'adminvotes', component: AdminVotesComponent },
  { path: 'ballot/postvote', component: PostvoteComponent },
  { path: 'votes', component: BallotComponent },
  { path: 'ballot/sfc', component: SfcComponent },
  { path: 'ballot', component: IsrcComponent },
  { path: 'ballot/csrc', component: CsrcComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  ,
  { path: '**', redirectTo: '' }

  // { path: '', component: LoginComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
