import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Auth } from '../models/authToke.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'https://young-sands-07814.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  // Autenticar usuario
  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/api/auth/login`, { email, password })
  }

  // Obtener el perfil de un usuario autenticado
  profile(token: string) {
    // Setear headers de la petición
    // const headers = new HttpHeaders();
    // headers.set('Authorization', `Bearer ${token}`)

    return this.http.get<User>(`${this.apiUrl}/api/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
