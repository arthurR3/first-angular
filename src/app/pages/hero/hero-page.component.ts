import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    styles: `
    dl {
        margin:20px;
        padding: 10px;
    }
    td {
        font-weight: bold;
        color: blue;
    }
    dd {
        font-size: 20px;
        color: black;
    }
    `
})

export class HeroPageComponent {

    name = signal('Ironman')
    age = signal(45)


    getHeroDescription() {
        return `${this.name()} - ${this.age()}`;
    }

    /// Señal computalizada
    capitalizedName = computed(() => this.name().toUpperCase())

    changeHero() {
        this.name.set('Spiderman')
        this.age.set(20)
    }

    resetForm() {
        this.name.set('Ironman')
        this.age.set(45)
    }
    changeAge() {
        this.age.update(() => 60)
    }
}