import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajosComponent } from './component/trabajos/trabajos.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { CovidTrackerComponent } from './component/covid-tracker/covid-tracker.component';
import { ClimaComponent } from './component/clima/clima.component';
import { RuletaComponent } from './component/ruleta/ruleta.component';
import { PedagogicoComponent } from './component/pedagogico/pedagogico.component';
import { PostComponent } from './component/post/post.component';






const routes: Routes = [
  { path: '', redirectTo: 'aboutme', pathMatch: 'full' },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'trabajos/covid', component: CovidTrackerComponent },
  { path: 'trabajos/clima', component: ClimaComponent },
  { path: 'trabajos/ruleta', component: RuletaComponent },
  { path: 'trabajos/django', component: PedagogicoComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'post', component: PostComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
