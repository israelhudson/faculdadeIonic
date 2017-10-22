import { ServiceProvider } from './../../providers/service-provider';
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {
  users: any[];

  constructor(public navCtrl: NavController,
    public service : ServiceProvider,
    public navParams: NavParams) {
      this.getDadosAlunos();
  }
  
  codCurso: any = this.navParams.get('idCurso');

  getDadosAlunos(){
    this.service.getAlunos(this.codCurso).subscribe(
      data => this.users = data,
      err => console.log(err)
    );   
  }

  ionViewDidLoad() {
    console.log(this.codCurso);
  }

}
