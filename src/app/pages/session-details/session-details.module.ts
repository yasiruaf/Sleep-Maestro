import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionDetailsPageRoutingModule } from './session-details-routing.module';

import { SessionDetailsPage } from './session-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionDetailsPageRoutingModule
  ],
  declarations: [SessionDetailsPage]
})
export class SessionDetailsPageModule {}
