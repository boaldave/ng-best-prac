import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenLayoutComponent } from './full-screen-layout/full-screen-layout.component';
import { HeaderFooterSidebarsLayoutComponent } from './header-footer-sidebars-layout/header-footer-sidebars-layout.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [OktaAuthGuard, PostLoginGuard],
    component: HeaderFooterSidebarsLayoutComponent

    // loadChildren: () => import('./header-footer-sidebars-layout/header-footer-sidebars-layout.module')
    //   .then(m => m.HeaderFooterSidebarsLayoutModule)
  },
  {
    path: 'full-screen',
    component: FullScreenLayoutComponent
    // loadChildren: () => import('./full-screen-layout/full-screen-layout.module')
    //   .then(m => m.FullScreenLayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
