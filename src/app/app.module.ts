import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent,
    DemoComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
