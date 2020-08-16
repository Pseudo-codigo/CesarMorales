import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ContainerComponent } from './layout/container/container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DemoComponent } from './components/demo/demo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { VideosComponent } from './components/videos/videos/videos.component';
import { VideoContainerComponent } from './components/videos/video-container/video-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent,
    DemoComponent,
    ClientesComponent,
    ServiciosComponent,
    ContactoComponent,
    VideosComponent,
    VideoContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
