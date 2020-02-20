import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../error-style.scss'],
})
export class RegisterComponent implements OnInit {
  

  
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }
  handleRegister(username:string, password:string, rePassword:string){

   
      this.userService.register({username, password, rePassword} );
      this.router.navigate(['/login']);
   }

    
  }

