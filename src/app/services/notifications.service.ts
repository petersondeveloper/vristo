import { Injectable } from '@angular/core';
import Swal from 'sweetalert';

declare const showMessageError: any; 

@Injectable({
  providedIn: 'root'
})

export class NotificationsService {

  constructor() { }

  showMessageError(msg: string = 'Example notification text.') {
    Swal("Erro!", msg, "error");
    
  }
  
  showMessageWarning(msg: string = 'Example notification text.') {
    Swal("Atenção", msg, "warning");
    
  }

  showMessageSuccess(msg: string = 'Example') {
    Swal('Informação', msg, 'success').then((value) => {
      console.log('clicou no ok')
      return true
    })
  }

  showMessageInfo(msg: string = 'Example') {
    Swal('Informação', msg, 'info',{className:"red-bg"})
  }

  showMessageOk(msg: string = 'Ok'): Promise<boolean> {
    return Swal('Sucesso', msg, 'success').then((result) => {
      return result
    })
  }
}
