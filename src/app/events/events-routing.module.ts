import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { ListComponent } from './list/list.component';
import { AuthenticationGuard } from '../authentication.guard';


const routes: Routes = [
  {
    path: 'event',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/event/create',

      },
      {
        path: 'create',
        component: CreateEventComponent,
        canActivate: [AuthenticationGuard],
        data: {
          isLogged: true,
        }

      },
      {
        path: 'list',
        component: ListComponent,
        canActivate: [AuthenticationGuard],
        data: {
          isLogged: true,
        }

      },
     

    ]
  },

];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
export const EventsRoutingModule = RouterModule.forRoot(routes);
