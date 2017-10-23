import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { ServiceProvider } from './../../providers/service-provider';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  loginForm : any = {};
  users:any[];

  idUsuario:number;
  nome_usuario:string;
  email_usuario:string; 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public service : ServiceProvider,
    public alertCtrl: AlertController) {
  }  

  postDados(req){
    this.service.postLogin(req.value)
    .subscribe(
      data => {console.log(data.mensage, data.nome, data.email);
              this.idUsuario = data.mensage;
              this.nome_usuario = data.nome;
              this.email_usuario = data.email;
              if(this.idUsuario>0){
                console.log('logado');
                this.navCtrl.push(HomePage);

              }else{
                console.log('Erro logado');
                const alert = this.alertCtrl.create({
                  title: 'Usuário ou senha incorretos',
                  subTitle: 'Tente novamente',
                  buttons: ['Ok, Entendi.']
                });
                alert.present();
              }
              // this.navCtrl.push(HomePage)
            },
      err => console.log(err)
    );
    //console.log(req.value);  

  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
    
  }

}
