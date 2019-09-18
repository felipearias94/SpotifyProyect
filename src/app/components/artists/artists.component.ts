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
  songsFav: string[] = [];

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


  saveFavorite(obj:any){    
    let imgFav = obj.album.images[2].url;
    let albumFav = obj.album.name;
    let trackFav = obj.name;
    const previewFav = obj.preview_url;
    console.log(obj);

    let objFavorites = {imgFav, albumFav, trackFav, previewFav};
    let myJSON = JSON.stringify(objFavorites);
    
    this.songsFav.push(myJSON);
    let x = this.songsFav.toString();
    localStorage.setItem('favSong',x);
  };
}