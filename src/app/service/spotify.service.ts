import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, debounceTime } from 'rxjs/operators';
import { empty } from 'rxjs';

// Por lo general cuando se trabaja con API
// Es necesario Centralizar la Informacion por eso este Service

// Este servicio se va a poder Inyectar en otros Componentes
@Injectable({
  providedIn: "root"
})
export class SpotifyService {

  token: string;


  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  auth() {
    this.token = localStorage.getItem('auth');
    const urlBase = 'https://accounts.spotify.com/authorize';
    const clientId = '4902478192dd4f888dbbd5b403d8f401';
    const scopes = encodeURIComponent('user-read-private user-read-email');
    const redirectUri = encodeURIComponent('http://localhost:4200/home');
    const url = `${urlBase}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}&show_dialog=true`;
    if (!this.token) {
      window.location.href = url;
    }
  }

  // Para  consulta generica
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    this.token = localStorage.getItem('auth');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery("browse/new-releases?market=AR&limit=50").pipe(
      map((data: any) => data.albums.items))
  }

  getArtists(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist,track,album&market=AR&limit=15`).pipe(
      map(data => data["artists"].items))
  }

  getArtist(id: string){
    return this.getQuery(`artists/${id}`);
 
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?&market=AR`).pipe(
      map(data => data["tracks"])
    );
  }

  
}

