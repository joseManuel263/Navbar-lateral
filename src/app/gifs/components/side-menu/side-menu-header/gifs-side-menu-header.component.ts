import { Component } from '@angular/core';
import { environment } from '@environments/environment'; // ✅ con alias configurado

@Component({
  selector: 'app-gifs-side-menu-header',
  templateUrl: './gifs-side-menu-header.component.html',
  styleUrls: ['./gifs-side-menu-header.component.scss']
})
export class GifsSideMenuHeaderComponent {
  envs = environment;
}
