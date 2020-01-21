import { Component, OnInit } from '@angular/core';
//Para que no se quede pensando la pagina colocamos el init_plugins();
declare function init_plugins();

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styles: []
})
export class NopagefoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins()
  }
}
