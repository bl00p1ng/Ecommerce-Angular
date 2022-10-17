import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = ''

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('Change just image =>', this.img);
  };

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>()
  imageDefault: string = './assets/images/default.png';
  // counter: number = 0;
  // counterFn: number | undefined;

  constructor() {
    console.log('Constructor', 'Img value =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChages', 'Img value =>', this.img);

    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('Run counter');
    // }, 1000)
  }

  ngOnInit(): void {
    console.log('ngOnInit', 'Img value =>', this.img);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
    // window.clearInterval(this.counterFn);
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
