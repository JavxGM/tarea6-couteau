import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-weatherpage',
  templateUrl: './weatherpage.page.html',
  styleUrls: ['./weatherpage.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    CommonModule,
    FormsModule
  ]
})
export class WeatherPage {
  city: string = 'Santo Domingo';
  weather: any = null;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  getWeather() {
    if (!this.city.trim()) {
      this.errorMessage = 'Por favor, ingresa una ciudad.';
      return;
    }

    const apiKey = 'c3568de6f3144f5d93221951242410'; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.city}&lang=es`;

    this.http.get(url).subscribe(
      (response: any) => {
        this.weather = response;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Error al conectar con la API del clima.';
      }
    );
  }
}