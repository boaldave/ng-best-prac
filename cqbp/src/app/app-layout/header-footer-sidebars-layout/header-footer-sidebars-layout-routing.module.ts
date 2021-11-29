import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFooterSidebarsLayoutComponent } from './header-footer-sidebars-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterSidebarsLayoutComponent,
    children: [
      {
        path: '',
        // canActivate: [OktaAuthGuard, PostLoginGuard],
        // component: FeaturesComponent
        // - doesn't load into proper router-outlet
        loadChildren: () => import('../../features/features.module')
          .then(m => m.FeaturesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderFooterSidebarsLayoutRoutingModule { }
