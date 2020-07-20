import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajosComponent } from './component/trabajos/trabajos.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { NotfoundComponent } from './component/notfound/notfound.component';






const routes: Routes = [
  { path: '', redirectTo: 'aboutme', pathMatch: 'full' },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
