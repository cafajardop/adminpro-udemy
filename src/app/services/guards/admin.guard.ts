import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    public _usuario_Service:UsuarioService
  ){

  }

  canActivate() {

    if(this._usuario_Service.usuario.role ==='ADMIN_ROLE'){
      return true;
    }
    else{
      console.log('Bloqueado por el ADMIN GUARD');
      this._usuario_Service.logout();
      return false;
    }    
  }
}

