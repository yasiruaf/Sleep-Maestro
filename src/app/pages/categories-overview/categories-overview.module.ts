import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesOverviewPageRoutingModule } from './categories-overview-routing.module';

import { CategoriesOverviewPage } from './categories-overview.page';
import { SharedModule } from 'src/app/module/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesOverviewPageRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CategoriesOverviewPage]
})
export class CategoriesOverviewPageModule {}
