import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipDemoRoutingModule } from './tooltip-demo-routing.module';
import { TooltipDemoComponent } from './tooltip-demo.component';
import { TooltipModule } from 'angular-ui';

@NgModule({
  imports: [
    CommonModule,
    TooltipDemoRoutingModule,
    TooltipModule
  ],
  declarations: [TooltipDemoComponent]
})
export class TooltipDemoModule { }
