import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artists/artists.component';
import { AlbumComponent } from './components/album/album.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'artist/:id', component: ArtistaComponent},
  {path: 'album', component: AlbumComponent},            
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  //{path: '**', pathMatch: 'full', redirectTo: 'home'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
