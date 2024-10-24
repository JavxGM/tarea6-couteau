import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/homepage',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'predictgenderpage',
    loadComponent: () => import('./predictgenderpage/predictgenderpage.page').then( m => m.PredictgenderpagePage)
  },
  {
    path: 'homepage',
    loadComponent: () => import('./homepage/homepage.page').then( m => m.HomepagePage)
  },
  {
    path: 'predictagepage',
    loadComponent: () => import('./predictagepage/predictagepage.page').then(m => m.PredictAgePage)
  },
  {
    path: 'universitiespage',
    loadComponent: () => import('./universitiespage/universitiespage.page').then(m => m.UniversitiesPage)
  },
  {
    path: 'weatherpage',
loadComponent: () => import('./weatherpage/weatherpage.page').then(m => m.WeatherPage)
  },
  {
    path: 'newspage',
    loadComponent: () => import('./newspage/newspage.page').then( m => m.NewspagePage)
  },
  {
    path: 'aboutpage',
    loadComponent: () => import('./aboutpage/aboutpage.page').then( m => m.AboutpagePage)
  },
];
