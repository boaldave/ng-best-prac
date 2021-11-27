import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
//const routes: Routes = [{ path: 'Entities', loadChildren: () => import('./features/entities/entities.module').then(m => m.EntitiesModule) }, { path: 'Entity', loadChildren: () => import('./features/entity/entity.module').then(m => m.EntityModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
