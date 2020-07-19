import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TrabajosComponent } from './component/trabajos/trabajos.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';




const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'aboutme', component: AboutmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
