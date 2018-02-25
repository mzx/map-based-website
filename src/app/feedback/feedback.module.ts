import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ],
  declarations: [TestComponent]
})
export class FeedbackModule { }
