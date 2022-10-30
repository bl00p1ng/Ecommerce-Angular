import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';

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
    private userService: UsersService,
    private fileService: FilesService
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
    .subscribe(response => {
      // Guardar del token de acceso del usuario
      console.log(response);
    });
  }

  // Obtener el perfil de un usuario logueado
  getProfile() {
    this.authService.profile()
    .subscribe(profile => console.log(profile))
  }

  // Descargar un archivo PDF
  downloadPDF() {
    this.fileService.getFile('file.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
    .subscribe()
  }
}
