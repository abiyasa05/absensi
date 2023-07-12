import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { LogbookComponent } from './logbook/logbook.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'logbook', component: LogbookComponent },
  { path: 'mahasiswa', component: MahasiswaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
