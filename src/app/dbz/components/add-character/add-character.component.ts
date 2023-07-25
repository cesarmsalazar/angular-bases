import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter

  public characterF: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {

    //debugger;

    console.log(this.characterF)
    if (this.characterF.name.length === 0) return;

    this.onNewCharacter.emit(this.characterF)

    /* this.characterF.name = '';
    this.characterF.power = 0; */
    this.characterF = {name:'', power:0}  // es lo mismo

  }

}

