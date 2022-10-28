import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Auth } from '../models/authToke.model';

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
  profile() {
    return this.http.get(`${this.apiUrl}/api/auth/profile`)
  }
}
