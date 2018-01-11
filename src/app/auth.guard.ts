import { Router } from '@angular/router';
import { routing } from './app.routing';
import { UserService } from './service/user.service';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private routing: Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    
  ) :Observable<boolean> | boolean{
      if(this.userService.isLogged()){
        return true;
      }

      this.routing.navigate(['/']);

      return false;
  }

  

}
