import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { EventsService } from 'src/app/events.service';


const appKey = "kid_rJ_PXY02S"
const registerUrl = `https://baas.kinvey.com/events/${appKey}`;

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss', '../../error-style.scss']
})
export class CreateEventComponent implements OnInit {


  form:FormGroup

  constructor(private eventsService:EventsService, private fb:FormBuilder) { 
    this.form=this.fb.group({
      event:['', Validators.required],
      dateTime:['', Validators.required],
      description:['', [Validators.required, Validators.minLength(50)]],
      imageURL:['', Validators.required]
    });
  }

  ngOnInit() {
  }

  createEventHandler(){
    this.eventsService.create(this.form.value)
    console.log(this.form.value);
  }

}
