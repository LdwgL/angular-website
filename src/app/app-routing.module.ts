import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MetiersComponent } from './metiers/metiers.component';
import { MissionsComponent } from './missions/missions.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  {
    path:'', pathMatch: "full", component: AccueilComponent

  },
{
  path:"accueil", component: MissionsComponent
},

  {
    path:"missions", component: MissionsComponent
  },

  {
    path: "metiers", component: MetiersComponent
  },

  {
    path:"contact", component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


