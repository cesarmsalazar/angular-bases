import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

// arreglos, listas, ngfor
export class ListComponent {
  public heroNames: string[] = [ 'Unidad de Administracion', 'Unidad de Logistica', 'Unidad de RRHH', 'Unidad de Mantenimiento' ]
  public deleteHero: string | undefined = '';

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
    //console.log({deleteHero});

  }
}
