import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TrabajosComponent } from './component/trabajos/trabajos.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { ContactoComponent } from './component/contacto/contacto.component';





const routes: Routes = [
  { path: '', redirectTo: 'aboutme' },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
