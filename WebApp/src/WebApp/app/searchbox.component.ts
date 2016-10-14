import { Component, Input, Output } from '@angular/core';


@Component({
    selector: 'search-box',
    template: `<div>
                    <input #box type="text" (keyup.enter)="displayAlert(box.value)" placeholder="lets get searching..." />
               </div>`
})
export class SearchboxComponent {

    text = "Search Here";
    constructor() {
        this.text;
    }

    displayAlert(msg: string) {
        window.alert(msg);
    }
}