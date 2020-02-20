import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/events.service';
import { IEvent } from 'src/app/shared/interfaces/event';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  get events(){return this.eventsService.events};

  // @Output() selectCause:EventEmitter<ICause>=new EventEmitter();
 
   constructor(private eventsService:EventsService) { 
         
   }
 
   ngOnInit() {
     this.eventsService.load().subscribe();
   }
 
   selectCauseHandler(event:IEvent){
    // this.selectCause.emit(cause);
     this.eventsService.selectEvent(event);
 
   }

}
