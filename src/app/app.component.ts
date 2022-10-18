import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  imgUrl: string = '';
  showImage: boolean = true;

  // Métodos
  onLoaded(img: string) {
    console.log(`Log padre ${img}`);
  }

  toogleImage() {
    this.showImage = !this.showImage;
  }
}
