import { Component } from '@angular/core';
import { OptionMenuComponent } from '../option-menu/option-menu.component';
import { CommonModule } from '@angular/common';
import { environment } from '@environments/environment';

interface MenuOption {
  icon: string;
  title: string;
  subtitle: string;
  router: string;
}

@Component({
  selector: 'app-gifs-side-menu-options',
  standalone: true,
  imports: [OptionMenuComponent, CommonModule],
  templateUrl: './gifs-side-menu-options.component.html',
  styleUrls: ['./gifs-side-menu-options.component.scss']
})
export class GifsSideMenuOptionsComponent {
  public menuOptions: MenuOption[] = environment.sideMenu;
}
