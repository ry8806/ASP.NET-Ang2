import { Component, Input, Output } from '@angular/core';


@Component({
    selector: 'search-box',
    template: `<div>
                    <input type="text" placeholder="lets get searching..." />
               </div>`
})
export class SearchboxComponent {

    text = "Search Here";
    constructor() {
        this.text;
    }
}