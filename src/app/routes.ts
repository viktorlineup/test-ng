import {Routes} from '@angular/router';
import {CreateTaskComponent} from './task/create-task/create-task.component';
import {TaskComponent} from './task/task.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: TaskComponent
    },
    {
        path: 'create-task',
        component: CreateTaskComponent
    },
];
