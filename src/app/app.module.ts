import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryService} from './configuration/in-memory.service';
import {TableModule} from 'primeng/table';
import {ConfigurationComponent} from "./configuration/configuration.component";
import {ListConfigurationComponent} from "./configuration/list-configuration/list-configuration.component";
import {CreateConfigurationComponent} from "./configuration/create-configuration/create-configuration.component";
import {EditConfigurationComponent} from "./configuration/edit-configuration/edit-configuration.component";
import {ConfigurationService} from "./configuration/configuration.service";
import {ConfigurationModalContentComponent} from "./configuration/modal/modal-content";

@NgModule({
    declarations: [
        AppComponent,
        ConfigurationComponent,
        ListConfigurationComponent,
        CreateConfigurationComponent,
        EditConfigurationComponent,
        ConfigurationModalContentComponent
    ],
    imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryService, { dataEncapsulation: false }
        ),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false}
        )
    ],
    entryComponents: [ConfigurationModalContentComponent],
    providers: [ConfigurationService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
