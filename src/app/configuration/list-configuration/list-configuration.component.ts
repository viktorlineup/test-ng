import {Component, OnInit} from "@angular/core";
import {ConfigurationService} from "../configuration.service";
import {Configuration} from "../configuration.model";

@Component({
    selector: 'app-list-configuration',
    templateUrl: './list-configuration.component.html',
    styleUrls: ['./list-configuration.component.scss']
})
export class ListConfigurationComponent implements OnInit {

    public configurations = [];

    constructor(private configurationService: ConfigurationService) {
    }

    ngOnInit() {
        this.configurationService.getAll()
            .subscribe((configurations) => {
                this.configurations = configurations;
            });
    }

    onDeleteTask(deletedConfiguration: Configuration) {
        this.configurationService
            .remove(deletedConfiguration.id)
            .subscribe(() => {
                this.configurations = this.configurations.filter((configuration: Configuration) => {
                    return configuration.id !== deletedConfiguration.id;
                });
            });
    }

}
