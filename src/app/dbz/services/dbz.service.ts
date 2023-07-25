import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public charactersM: Character[] = [
    {
      name: 'Administración',
      power: 500
    },
    {
      name: 'Logistica',
      power: 1000
    },
    {
      name: 'Administración',
      power: 1200
    }
  ];

  onDeleteCharacter(index: number):void {
    this.charactersM.splice(index, 1);
  }

  onNewCharacter2(character: Character): void {
    this.charactersM.push(character);
    console.log(character);
  }


}
