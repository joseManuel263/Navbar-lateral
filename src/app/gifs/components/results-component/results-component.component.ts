import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifCardComponentComponent } from '../gif-card-component/gif-card-component.component';
import { Gif } from '../../interfaces/giphy.interfaces';

@Component({
  selector: 'app-results-component',
  imports: [CommonModule, GifCardComponentComponent],
  templateUrl: './results-component.component.html',
  styleUrl: './results-component.component.scss'
})
export class ResultsComponentComponent {
  @Input() gifs: Gif[] = [];
}
