import { AlunosPage } from './../alunos/alunos';
import { ServiceProvider } from './../../providers/service-provider';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any[];

  constructor(public navCtrl: NavController,
    public service : ServiceProvider,) {
    this.getDadosCursos();
  }

  getDadosCursos(){
    this.service.getCursos().subscribe(
      data => this.users = data,
      err => console.log(err)
    );    
  }

  passaAluno(cursoCodigo:any):void{
    this.navCtrl.push(AlunosPage, {
      idCurso: cursoCodigo
    }); 
  }


}
