import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from 'src/app/features/features.component';
import { FullScreenLayoutComponent } from './full-screen-layout.component';
// const routes: Routes = [
//   {
//     path: '',
//     component: AppLayoutComponent,
//     canActivate: [OktaAuthGuard, PostLoginGuard],
//     children: [
//       {
//         path: '',
//         loadChildren: () => import('./app/features.module').then(m => m.FeaturesModule)
//       }
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: FullScreenLayoutComponent,
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
export class FullScreenLayoutRoutingModule { }
