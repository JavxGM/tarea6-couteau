import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    CommonModule, 
    IonApp, 
    IonSplitPane, 
    IonMenu, 
    IonContent, 
    IonList, 
    IonListHeader, 
    IonNote, 
    IonMenuToggle, 
    IonItem, 
    IonIcon, 
    IonLabel, 
    IonRouterLink, 
    IonRouterOutlet
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/homepage', icon: 'mail' },
    { title: 'Predecir Genero', url: '/predictgenderpage', icon: 'paper-plane' },
    { title: 'Predecir Edad', url: '/predictagepage', icon: 'heart' },
    { title: 'Universidades', url: '/universitiespage', icon: 'archive' },
    { title: 'Clima', url: '/weatherpage', icon: 'trash' },
    { title: 'Noticias', url: '/newspage', icon: 'warning' },
    { title: 'Sobre', url: '/aboutpage', icon: 'warning' },
  ];
}
