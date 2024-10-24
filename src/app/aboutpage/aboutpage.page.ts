import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
   } from '@ionic/angular/standalone';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.page.html',
  styleUrls: ['./aboutpage.page.scss'],
  standalone: true,
  imports: [    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    CommonModule,
    FormsModule]
})
export class AboutpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
