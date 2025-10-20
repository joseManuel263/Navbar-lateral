import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search-page',
  imports: [CommonModule],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  gifs: any[] = [];
  loading = false;
  errorMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('🟢 ngOnInit ejecutado');
    this.searchGifs();
  }

  searchGifs(): void {
    console.log('🔍 Solicitando GIFs...');
    this.loading = true;
    this.errorMessage = '';

    this.apiService.searchGifs(15).subscribe({
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
