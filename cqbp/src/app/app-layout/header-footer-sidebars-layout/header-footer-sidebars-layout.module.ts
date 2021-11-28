import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderFooterSidebarsLayoutRoutingModule } from './header-footer-sidebars-layout-routing.module';
import { HeaderFooterSidebarsLayoutComponent } from './header-footer-sidebars-layout.component';
import { FeaturesModule } from 'src/app/features/features.module';
import { CqSharedModule } from 'cq-shared';

@NgModule({
  declarations: [
    HeaderFooterSidebarsLayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderFooterSidebarsLayoutRoutingModule,
    FeaturesModule,
    CqSharedModule
  ]
})
export class HeaderFooterSidebarsLayoutModule { }
