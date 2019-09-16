import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})

export class ArtistaComponent {

  artista: any = [];
  topTracks: any[] = [];

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService ) {

    this.loadingArtist = true;

    this.router.params.subscribe( params => {

      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });
  }

  getArtista( id: string ) {

    this.loadingArtist = true;

    this.spotify.getArtist( id )
          .subscribe( artista => {
            console.log(artista);
            this.artista = artista;

            this.loadingArtist = false;
          });
  }

  getTopTracks( id: string ) {

    this.spotify.getTopTracks( id )
            .subscribe( topTracks => {
              console.log(topTracks);
              this.topTracks = topTracks;
            });
  }

  saveFavorite(){
    let imgFav = document.getElementById("imgFav");
    let albumFav = document.getElementById("albumFav");
    let trackFav = document.getElementById("trackFav");
    const previewFav = document.getElementById("previewFav");

    let objFavorites = {imgFav, albumFav, trackFav, previewFav}
    let myJSON = JSON.stringify(objFavorites)
    localStorage.setItem('song',myJSON)
  }

}