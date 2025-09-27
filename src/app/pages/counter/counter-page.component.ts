import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
    styles: `
        button {
            padding: 6px 10px;
            margin: 5px;
            background-color: rgba(98, 19, 172, 0.86);
            border:none;
            color: white;
            border-radius: 10px;
            cursor: pointer;
           
        }
    `,

})
export class CounterPageComponent {
    counter = 10;
    counterSignal = signal(10)

    // Uncomment to see the effect of signal with setInterval
    /* See that the UI updates automatically */

/*     constructor() {
        setInterval(() => {
            this.counterSignal.update((v) => v + 1)
            console.log('Ticket')
        }, 2000)
    } */
   // ***************************************///

    increaseBy(value: number) {
        this.counter += value;

        this.counterSignal.update((current) => current + value)
    }

    reset() {
        this.counter = 10
        this.counterSignal.set(10)
    }
}