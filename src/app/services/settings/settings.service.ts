import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
// Saber que tema esta seleccionado
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  // Guardar ajustes en el local storage
  guardarAjustes() {
  // El local sotrage solo guarda strings asi que uso Json.stringify
  // console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
  // Puede ser que no haya ajustes predefinidos asi que primero valido si los hay
  // Como los ajustes vienen en String tengo que vonvertilos a Json con Json.parse
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log('cargando ajustes del local storage');
      this.aplicarTema( this.ajustes.tema );
    } else {
      // console.log('cargando ajustes por defecto');
      this.aplicarTema( this.ajustes.tema );
    }
  }

aplicarTema (tema: string) {
const url = `assets/css/colors/${tema}.css`;
this._document.getElementById('tema').setAttribute('href', url);

// Guardo los ajustes en el local storage
this.ajustes.tema = tema;
this.ajustes.temaUrl = url;

this.guardarAjustes();
}}


interface Ajustes {
  temaUrl: string;
  tema: string;

}
