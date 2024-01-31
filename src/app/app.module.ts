// importações
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ // declaração dos componentes que fazem parte deste módulo
    AppComponent, 
    LoginComponent, 
    LayoutComponent, 
    DashboardComponent 
  ],
  imports: [ // imports de app component
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // componente principal que inicializa o aplicativo
})
// exporta a classe do módulo principal
export class AppModule { }
