// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  // { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }, // Default route
  // { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
//   { path: '**', component: HomeComponent }  // Wildcard route for fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
