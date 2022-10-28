import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  imgUrl: string = '';
  showImage: boolean = true;

  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {}

  // Métodos
  onLoaded(img: string) {
    console.log(`Log padre ${img}`);
  }

  toogleImage() {
    this.showImage = !this.showImage;
  }

  // Crear un usuario
  createUser() {
    this.userService.create({
      name: 'Andrés',
      email: 'andres@example.com',
      password: 'angularsitoP4r4L0sAm1g0s'
    })
    .subscribe(data => console.log(data));
  }

  // Autenticar usuario
  login() {
    this.authService.login('andres@example.com', 'angularsitoP4r4L0sAm1g0s')
    .subscribe(data => console.log(data));
  }
}
