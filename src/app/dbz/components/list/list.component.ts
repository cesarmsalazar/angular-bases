import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // Decorador Input: Define una propiedad que puede ser enviada desde el padre hasta el componente hijo
  @Input()
  public characterList: Character[] = [
    {
      name: 'Mantenimiento',
      power: 50
    }
  ]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index:number): void {
    // Emitir el ID del personaje
    this.onDelete.emit(index);
  }
}
