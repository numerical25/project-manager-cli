import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DetailsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
