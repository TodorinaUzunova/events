import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../error-style.scss']
})
export class LoginComponent implements OnInit {

  form:NgForm

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  handleLogin(username:string, password:string){
     this.userService.login({username, password});
     this.router.navigate(['/event/list']);
  }

}
