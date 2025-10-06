import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/characters.type';

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
  ])

  addCharacter() {
    console.log(`se agrega un personaje: ${this.name()} - ${this.power()}`);

    if(!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter:Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    this.characters.update((characters) => [...characters, newCharacter])
    this.resetField();
  }

  resetField(){
    this.name.set('');
    this.power.set(0);
  }
}
