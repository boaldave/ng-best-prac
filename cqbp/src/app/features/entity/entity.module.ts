import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRoutingModule } from './entity-routing.module';
import { EntityComponent } from './entity.component';
import { AddressComponent } from './address/address.component';
import { PhoneComponent } from './phone/phone.component';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [
    EntityComponent,
    AddressComponent,
    PhoneComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    EntityRoutingModule
  ]
})
export class EntityModule { }
