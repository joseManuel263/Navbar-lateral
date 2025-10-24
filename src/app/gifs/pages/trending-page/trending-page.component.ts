import { Component, inject, signal, computed, WritableSignal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.scss']
})
export class TrendingPageComponent {

  public apiService = inject(ApiService);

  private _limit = signal(15);
  limit: WritableSignal<number> = this._limit;

  private _offset = signal(0);
  offset: WritableSignal<number> = this._offset;

  page = computed(() => Math.floor(this._offset() / this._limit()) + 1);

  constructor() {
    this.loadGifs();

    effect(() => {
      const gifs = this.apiService.gifs();
      if (gifs.length) localStorage.setItem('trendingGifs', JSON.stringify(gifs));
    });
  }

  loadGifs(): void {
    this.apiService.getTrendingGifs(this._offset());
  }

  prevPage(): void {
    if (this._offset() >= this._limit()) {
      this._offset.update(o => o - this._limit());
      this.loadGifs();
    }
  }

  nextPage(): void {
    this._offset.update(o => o + this._limit());
    this.loadGifs();
  }
}
