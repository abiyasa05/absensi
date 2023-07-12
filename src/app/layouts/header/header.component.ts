import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  toggle(){
    const element = document.body as HTMLBodyElement
    element.classList.toggle('toggle-sidebar')
  }
  onLogout(): void {
    // Lakukan logika logout di sini (misalnya, hapus data sesi, bersihkan cache, dll.)
    // Redirect ke halaman login setelah logout
    this.router.navigate(['/login']);
  }
}
