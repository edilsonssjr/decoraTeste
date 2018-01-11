import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users = [];
  login = false;


  constructor() {
    this.getUsers();
  }

  getUsers() {
    let temp: any = localStorage.getItem('users');
    if (temp == null) {
      this.storeUser('', '', 'admin', 'admin', 'admin');
    } 
      temp = localStorage.getItem('users');
      this.users = JSON.parse(temp);
      return this.users;

  }

  storeUser(cpf, nome, email, password, perfil) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].cpf == cpf) {
        return false;
      }
    }
    var user = { cpf: cpf, nome: nome, email: email, password: password, perfil: perfil };
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }

  isLogged(){
    let log:any = localStorage.getItem('login');
    if(log == 'false'|| log == null){
        return false;
    }else{
      return true;
    }
  }

  getUserLogged(){
    let userLogged:any = localStorage.getItem('userLogged');
    return JSON.parse(userLogged);
  }


}
