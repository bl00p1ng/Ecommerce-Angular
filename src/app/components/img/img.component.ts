import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>()
  imageDefault: string = './assets/images/default.png';

  constructor() { }

  ngOnInit(): void {
  }

  // ********** Métodos **********
  //
  imgLoad() {
    console.log('Load hijo');
    this.loaded.emit(this.img)
  }

  // Mostrar una imagen por defecto si hay un error al cargar la original
  imgError() {
    this.img = this.imageDefault;
  }

}
