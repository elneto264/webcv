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
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './component/sidenav-list/sidenav-list.component';
import { MatCardModule } from "@angular/material/card";
import { CovidTrackerComponent } from './component/covid-tracker/covid-tracker.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatButtonModule } from '@angular/material/button';
import { PostComponent } from './component/post/post.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FnadComponent } from './component/fnad/fnad.component';
import { JobtestComponent } from './component/jobtest/jobtest.component';
import {MatExpansionModule} from '@angular/material/expansion';






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
    LayoutComponent,
    SidenavListComponent,
    CovidTrackerComponent,
    PostComponent,
    FnadComponent,
    JobtestComponent
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    TooltipModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableExporterModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}