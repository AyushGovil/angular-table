import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
interface Item {
  color: string;
  header: string;
  item: string;
  subitems: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sidenav: any = '';

  toggleSidebar(sidenav: MatSidenav) {
    this.sidenav = sidenav;
    this.sidenav.toggle();
  }
}
