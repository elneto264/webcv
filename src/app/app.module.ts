import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



import { AppComponent } from './app.component';
import { CabezeraComponent } from './component/cabezera/cabezera.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { ClimaComponent } from './component/clima/clima.component';
import { RuletaComponent } from './component/ruleta/ruleta.component';
import { TecnologiasComponent } from './component/tecnologias/tecnologias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { FormacionComponent } from './component/formacion/formacion.component';
import { PedagogicoComponent } from './component/pedagogico/pedagogico.component';
import { TrabajosComponent } from './component/trabajos/trabajos.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './component/contacto/contacto.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezeraComponent,
    AboutmeComponent,
    TimelineComponent,
    ClimaComponent,
    RuletaComponent,
    TecnologiasComponent,
    FormacionComponent,
    PedagogicoComponent,
    TrabajosComponent,
    ContactoComponent,
    NotfoundComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    TooltipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
