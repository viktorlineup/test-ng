import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TaskComponent} from './task/task.component';
import {ListTaskComponent} from './task/list-task/list-task.component';
import {TaskService} from './task/task.service';
import {CreateTaskComponent} from './task/create-task/create-task.component';
import {EditTaskComponent} from './task/edit-task/edit-task.component';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryTaskService} from './task/in-memory-task.service';


@NgModule({
    declarations: [
        AppComponent,
        TaskComponent,
        ListTaskComponent,
        CreateTaskComponent,
        EditTaskComponent
    ],
    imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryTaskService),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        )
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
