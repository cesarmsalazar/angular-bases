import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'gerente de administración';
  public age:  number = 45;

  // one way databinding
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // concatenar
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  //metodos
  changeHero(): void {
    this.name = 'Jefe UPD';
  }

  changeAge(): void {
    this.age = 35;

  }
}
