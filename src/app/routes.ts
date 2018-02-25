import {Routes} from '@angular/router';
import {ConfigurationComponent} from "./configuration/configuration.component";
import {CreateConfigurationComponent} from "./configuration/create-configuration/create-configuration.component";
import {EditConfigurationComponent} from "./configuration/edit-configuration/edit-configuration.component";

export const appRoutes: Routes = [
    {
        path: '',
        component: ConfigurationComponent
    },
    {
        path: 'create-configuration',
        component: CreateConfigurationComponent
    },
    {
        path: 'edit-configuration/:id',
        component: EditConfigurationComponent
    },
];
