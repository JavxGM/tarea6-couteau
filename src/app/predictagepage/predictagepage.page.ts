import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-predictagepage',
  templateUrl: './predictagepage.page.html',
  styleUrls: ['./predictagepage.page.scss'],
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
export class PredictAgePage {
  name: string = '';
  age: number | null = null;
  ageGroup: string = '';
  ageImage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  predictAge() {
    // Verificar si el nombre está vacío
    if (!this.name.trim()) {
      this.errorMessage = 'Por favor, ingresa un nombre.';
      this.age = null;
      this.ageGroup = '';
      this.ageImage = '';
      return;
    }

    const url = `https://api.agify.io/?name=${this.name}`;

    this.http.get(url).subscribe(
      (response: any) => {
        // Resetear el mensaje de error
        this.errorMessage = '';

        // Obtener la edad de la respuesta
        this.age = response.age;

        if (this.age !== null) {
          if (this.age < 18) {
            this.ageGroup = 'Joven';
            this.ageImage = 'assets/joven.jpg';
          } else if (this.age < 60) {
            this.ageGroup = 'Adulto';
            this.ageImage = 'assets/adulta.png';
          } else {
            this.ageGroup = 'Anciano';
            this.ageImage = 'assets/anciana.png';
          }
        } else {
          this.ageGroup = 'No Disponible';
          this.errorMessage = 'No se pudo determinar la edad.';
        }
      },
      error => {
        // Manejar el error de conexión
        this.errorMessage = 'Error al conectar con la API.';
        console.error('Error al conectar con la API:', error);

        // Resetear los valores si hay un error
        this.age = null;
        this.ageGroup = '';
        this.ageImage = '';
      }
    );
  }
}
