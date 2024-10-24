import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-predictgenderpage',
  templateUrl: './predictgenderpage.page.html',
  styleUrls: ['./predictgenderpage.page.scss'],
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
export class PredictgenderpagePage {
  name: string = '';
  gender: string | null = null;
  backgroundColor: string = 'white';

  constructor(private http: HttpClient) {}

  predictGender() {
    if (this.name.trim() === '') {
      return; // No se ejecuta si no se ingresa un nombre
    }

    const url = `https://api.genderize.io/?name=${this.name}`;
    this.http.get(url).subscribe((response: any) => {
      this.gender = response.gender;

      // Cambiar el color del círculo según el género
      if (this.gender === 'male') {
        this.backgroundColor = 'blue';
      } else if (this.gender === 'female') {
        this.backgroundColor = 'pink';
      } else {
        this.backgroundColor = 'grey'; // Caso no identificado
      }
    });
  }
}
