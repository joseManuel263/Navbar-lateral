import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-trending-page',
  imports: [CommonModule],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.scss'
})
export class TrendingPageComponent implements OnInit{

  gifs: any[] = [];
  loading = false;
  errorMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('🟢 ngOnInit ejecutado');
    this.getTrendingGifs();
  }

  getTrendingGifs(): void {
    console.log('🔍 Solicitando GIFs...');
    this.loading = true;
    this.errorMessage = '';

    this.apiService.getTrendingGifs(15).subscribe({
      next: (response) => {
        console.log('✅ Respuesta recibida de Giphy:', response);
        this.gifs = response.data;
        console.log('🖼️ GIFs guardados:', this.gifs);
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los GIFs 😓';
        console.error('❌ Error en la API:', error);
        this.loading = false;
      }
    });
  }
}
