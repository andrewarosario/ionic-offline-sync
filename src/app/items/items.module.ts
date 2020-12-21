import { NgModule } from '@angular/core';
import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ItemsPageRoutingModule
  ],
  declarations: [ItemsPage]
})
export class ItemsPageModule {}
