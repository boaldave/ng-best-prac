import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent
    //loadChildren: () => import('./app-layout/app-layout.module').then(m => m.AppLayoutModule)
  },
  // {
  //   path: 'post-login',
  //   component: PostLoginComponent
  // },
  // { path: 'security/receiveToken', pathMatch: 'full', component: AppSecurityComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
