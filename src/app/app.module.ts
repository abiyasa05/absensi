import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { LogbookComponent } from './logbook/logbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    OverviewComponent,
    FooterComponent,
    MahasiswaComponent,
    LogbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
