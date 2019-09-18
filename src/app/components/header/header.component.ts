import { Component, OnInit, HostListener, Inject } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})

export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document, private spotify: SpotifyService) { }

  artistas: any[] = [];
  loading: boolean;

  buscar(termino: string) {
    console.log(termino);

    this.loading = true;
    this.spotify.getArtists( termino )
          .subscribe( (data: any) => {
            console.log(data);
            this.artistas = data;
            this.loading = false;
          });
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }
}