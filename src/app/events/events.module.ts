import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { ListComponent } from './list/list.component';
import { CreateEventComponent } from './create-event/create-event.component';



@NgModule({
  declarations: [ListComponent, CreateEventComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  exports:[ListComponent, CreateEventComponent]
})
export class EventsModule { }
