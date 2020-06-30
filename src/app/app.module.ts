import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




import { AppComponent } from './app.component';
import { CabezeraComponent } from './component/cabezera/cabezera.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { ClimaComponent } from './component/clima/clima.component';
import { RuletaComponent } from './component/ruleta/ruleta.component';
import { TecnologiasComponent } from './component/tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezeraComponent,
    AboutmeComponent,
    TimelineComponent,
    ClimaComponent,
    RuletaComponent,
    TecnologiasComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
