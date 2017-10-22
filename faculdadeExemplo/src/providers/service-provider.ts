import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceProvider {

  api:string = 'http://localhost/faculdade/';

  constructor(public http: Http) {}

  getCursos(){
    return this.http.get(this.api+'listaCursos.php').map(res => res.json());
  }

  getAlunos(idCurso:any){
    return this.http.get(this.api+'listaAlunos.php?codigo_curso='+idCurso).map(res => res.json());
  }


}
