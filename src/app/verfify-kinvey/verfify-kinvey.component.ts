import { Component, OnInit } from '@angular/core';
import { PingService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-verfify-kinvey',
  templateUrl: './verfify-kinvey.component.html',
  styleUrls: ['./verfify-kinvey.component.scss']
})
export class VerfifyKinveyComponent {

  constructor(private pingService: PingService) {
    this.verify();
  }
  async verify() {
    try {
      const response = await this.pingService.ping();
      console.log("Kinvey is up! "
                 + "Version: " + response.version
                 + " Response: " + response.kinvey
      );
    } catch (error) {
      console.log("Kinvey Ping Failed. Response: ${error.description}");
    }
  }
}
