import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http: HttpClient
  ) { }

  // Descargar archivos
  getFile(name: string, url: string, type: string) {
    // Obtener el contenido del archivo
    return this.http.get(url, {responseType: 'blob'})
    .pipe(
      tap(content => {
        // Descargar el archivo
        const blob = new Blob([content], {type});
        saveAs(blob, name);

        // Si todo sale bien, tranformar la petición y mostrar true
        map(() => true)
      })
    )
  }

}
