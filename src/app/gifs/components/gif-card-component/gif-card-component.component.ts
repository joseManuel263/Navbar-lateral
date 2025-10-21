import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gif } from '../../interfaces/giphy.interfaces';

@Component({
  selector: 'app-gif-card-component',
  imports: [CommonModule],
  templateUrl: './gif-card-component.component.html',
  styleUrl: './gif-card-component.component.scss'
})
export class GifCardComponentComponent {
  @Input() gif!: Gif;
}
