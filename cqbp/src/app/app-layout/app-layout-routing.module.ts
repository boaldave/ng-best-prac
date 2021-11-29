import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    // canActivate: [OktaAuthGuard, PostLoginGuard],
    children: [
      {
        path: '',
        // canActivate: [OktaAuthGuard, PostLoginGuard],
        // component: HeaderFooterSidebarsLayoutComponent,
        // - doesn't load into proper router-outlet
        loadChildren: () => import('./header-footer-sidebars-layout/header-footer-sidebars-layout.module')
          .then(m => m.HeaderFooterSidebarsLayoutModule)
      },
      {
        path: 'full-screen',
        // canActivate: [OktaAuthGuard, PostLoginGuard],
        // component: FullScreenLayoutComponent,
        // - doesn't load into proper router-outlet
        loadChildren: () => import('./full-screen-layout/full-screen-layout.module')
          .then(m => m.FullScreenLayoutModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
