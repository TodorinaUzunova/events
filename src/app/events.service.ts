import { Injectable } from '@angular/core';
import { IEvent } from './shared/interfaces/event';
import{HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { UserService } from './user/user.service';


const appKey = "kid_rJ_PXY02S" 
const eventsUrl = `https://baas.kinvey.com/events/${appKey}`;

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  readonly selectedEvent:IEvent;
  
  events:IEvent[];

  constructor(private http:HttpClient, private userService:UserService) { 
      
  }

  
 

  load(_id?:string) { 
    return this.http.get<IEvent[] | IEvent>(`${eventsUrl}${_id? `$/{_id}`: ''}`, {headers:this.userService.createAuthHeaders("Kinvey")} ).pipe(
      tap((events)=>this.events=[].concat(events))
    );
    
     }

     create(event:any){
      this.http.post(`${eventsUrl}/`, event, {headers:this.userService.createAuthHeaders("Kinvey")})
    }

  // load(_id?:string) { 
  //   return this.http.get<IEvent[] | IEvent>(`http://localhost:3000/events${_id? `$/{_id}`: ''}`).pipe(
  //     tap((events)=>this.events=[].concat(events))
  //   );
    
  //    }

  //    create(event:any){
  //     this.http.post(`http://localhost:3000/events/`, event)
  //   }

  like(event:any){
      this.http.post(`http://localhost:3000/events/${this.selectedEvent._id}`, event)
    }
   

selectEvent(event:IEvent){
 (this as any).selectedEvent=event;
}

}
