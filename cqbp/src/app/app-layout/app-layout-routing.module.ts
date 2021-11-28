import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // canActivate: [OktaAuthGuard, PostLoginGuard],
    loadChildren: () => import('./header-footer-sidebars-layout/header-footer-sidebars-layout.module')
      .then(m => m.HeaderFooterSidebarsLayoutModule)
  },
  {
    path: 'full-screen',
    loadChildren: () => import('./full-screen-layout/full-screen-layout.module')
      .then(m => m.FullScreenLayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
