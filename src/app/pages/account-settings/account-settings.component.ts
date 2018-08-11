import { SettingsService } from '../../services/service.index';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
// importamos los servicios
  constructor (public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any) {
    this.aplicarCheck(link);

    this._ajustes.aplicarTema( tema );


  }

  aplicarCheck ( link: any) {

    // se cambia a Const las variables selectores y ref
    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }


  colocarCheck () {

    const selectores: any = document.getElementsByClassName('selector');

    const tema = this._ajustes.ajustes.tema;
// para revisar atributos de html
    for ( const ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
       }

    }



  }

}
