import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/characters.type';


function getLocalStorage(): Character[] {
    const data = localStorage.getItem('characters')
    return data ? JSON.parse(data) : []
}


@Injectable({ providedIn: 'root' })
export class DragonballService {

    characters = signal<Character[]>(getLocalStorage())

    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()))
    })
    addCharacter(newCharacter: Character) {
        this.characters.update((characters) => [...characters, newCharacter])
    }

}