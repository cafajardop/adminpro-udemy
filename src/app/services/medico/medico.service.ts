import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService  {

  totalMedicos: number = 0;
  constructor(
    public http: HttpClient
  ) { }

  cargarMedicos() {
    let url = URL_SERVICIOS + '/medico';
    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          this.totalMedicos = resp.total;
          return resp.medicos;
          //console.log(resp);
        }));
  }
}
