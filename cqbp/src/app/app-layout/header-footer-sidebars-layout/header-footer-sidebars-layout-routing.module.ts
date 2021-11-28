import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from 'src/app/features/features.component';
import { HeaderFooterSidebarsLayoutComponent } from './header-footer-sidebars-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterSidebarsLayoutComponent,
    children: [
      {
        path: '',
        component: FeaturesComponent
        // loadChildren: () => import('../../features/features.module').then(m => m.FeaturesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderFooterSidebarsLayoutRoutingModule { }
