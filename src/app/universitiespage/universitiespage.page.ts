import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-universitiespage',
  templateUrl: './universitiespage.page.html',
  styleUrls: ['./universitiespage.page.scss'],
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
export class UniversitiesPage {
  country: string = '';
  universities: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  getUniversities() {
    if (this.country.trim() === '') {
      this.errorMessage = 'Por favor, ingresa un país.';
      return;
    }

    const url = `http://universities.hipolabs.com/search?country=${this.country}`;
    this.http.get(url).subscribe(
      (response: any) => {
        this.universities = response;
        this.errorMessage = '';

        if (this.universities.length === 0) {
          this.errorMessage = 'No se encontraron universidades para este país.';
        }
      },
      error => {
        this.errorMessage = 'Error al conectar con la API.';
        console.error('Error al conectar con la API:', error);
      }
    );
  }
}
