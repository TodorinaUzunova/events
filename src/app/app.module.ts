import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { EventsModule } from './events/events.module';
import { HttpClientModule } from '@angular/common/http';
import { KinveyModule } from 'kinvey-angular-sdk';
import { PasswordsMatchDirective } from './shared/validators/directives/passwords-match.directive';
import { VerfifyKinveyComponent } from './verfify-kinvey/verfify-kinvey.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    PasswordsMatchDirective,
    VerfifyKinveyComponent
    
  ],
  imports: [
    BrowserModule,
    KinveyModule.init({
      appKey: 'kid_rJ_PXY02S',
      appSecret: 'eb18e36a686e4488bbd362263d05cc6b'
    }),
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
     UserModule,
    AppRoutingModule, 
    EventsModule,
  
  ],
  exports:[
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
