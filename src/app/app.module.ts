import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCurriculumComponent } from './my-curriculum/my-curriculum.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent, MyCurriculumComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
