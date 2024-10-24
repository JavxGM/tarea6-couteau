import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.page.html',
  styleUrls: ['./newspage.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewspagePage {
  news: any[] = [];
  errorMessage: string = '';
  siteUrl: string = 'https://hablandodecomics.wordpress.com/wp-json/wp/v2/posts?per_page=3';
  logoUrl: string = 'https://hablandodecomics.wordpress.com/favicon.ico';

  constructor(private http: HttpClient) {}

  getNews() {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const url = `${proxyUrl}${encodeURIComponent(this.siteUrl)}`;

    this.http.get(url, { responseType: 'text' }).subscribe(
      (response: any) => {
        try {
          // Analizar la respuesta solo si es un JSON válido
          const data = JSON.parse(response);
          this.news = data.contents ? JSON.parse(data.contents) : [];
          if (!this.news.length) {
            this.errorMessage = 'No se encontraron noticias.';
          }
        } catch (e) {
          // Si ocurre un error al analizar, mostrar el error
          this.errorMessage = 'No se pudo procesar la respuesta de la API.';
          console.error('Error al procesar la respuesta:', e);
        }
      },
      error => {
        this.errorMessage = 'Error al conectar con la API de noticias.';
        console.error('Error al conectar con la API:', error);
      }
    );
  }
}
