import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { CrudComponent } from './components/pages/crud/crud.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RotationComponent } from './components/pages/rotation/rotation.component';
import { GuardService } from './services/login-auth/guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  // con permisos
  {
    path: 'crud',
    component: CrudComponent,
    canActivate: [GuardService],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardService],
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    canActivate: [GuardService],
  },
  {
    path: 'rotation',
    component: RotationComponent,
    canActivate: [GuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [GuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
