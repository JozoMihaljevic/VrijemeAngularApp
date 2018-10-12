import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PrognozaComponent } from './prognoza/prognoza.component';
import { WeatherService } from './shared/services/weather.service';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PrognozaComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpModule
    ],
    providers: [WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule { }
