import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// 🔹 Interfaces opcionales para tipado fuerte
interface Gif {
  id: string;
  title: string;
  url: string;
  images: {
    original: {
      url: string;
      width: string;
      height: string;
    };
  };
}

interface GiphyResponse {
  data: Gif[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = 'https://api.giphy.com/v1/gifs';
  private readonly apiKey = 'LhJgmZp2NOzCqyte5q13kjguEUIi4maP'; // 🔑 reemplaza con tu propia API key

  constructor(private http: HttpClient) {}

  // 🔥 Obtener los GIFs en tendencia
  getTrendingGifs(limit: number = 20, rating: string = 'g'): Observable<GiphyResponse> {
  const url = `${this.apiUrl}/trending?api_key=${this.apiKey}&limit=${limit}&rating=${rating}`;
    console.log('🌐 Llamando a:', url);
    return this.http.get<GiphyResponse>(url);
  }

  // 🔎 Buscar GIFs
  searchGifs(query: string, limit: number = 20, rating: string = 'g'): Observable<GiphyResponse> {
    const url = `${this.apiUrl}/search?api_key=${this.apiKey}&q=${encodeURIComponent(query)}&limit=${limit}&rating=${rating}`;
    console.log('🔍 Buscando GIFs con URL:', url);
    return this.http.get<GiphyResponse>(url);
  }
}
