import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, SearchboxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }