import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[] ): string {

    if ( !images ) {
      return 'https://homestaymatch.com/images/no-image-available.png';
    }
  
    if ( images.length > 0 ) {
      return images[1];
    } else {
      return 'https://homestaymatch.com/images/no-image-available.png';
    }
  }
}
