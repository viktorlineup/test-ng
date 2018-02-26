import {Component, OnInit} from "@angular/core";
import {ConfigurationService} from "../configuration.service";
import {Configuration} from "../configuration.model";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfigurationModalContentComponent} from "../modal/modal-content";

@Component({
    selector: 'app-list-configuration',
    templateUrl: './list-configuration.component.html',
    styleUrls: ['./list-configuration.component.scss']
})
export class ListConfigurationComponent implements OnInit {

    public configurations = [];

    constructor(
        private configurationService: ConfigurationService,
        private router: Router,
        private modalService: NgbModal) {
    }

    ngOnInit() {
        this.configurationService.getAll()
            .subscribe((configurations) => {
                this.configurations = configurations;
            });
    }

    onDeleteConfiguration(deletedConfiguration: Configuration) {
        this.configurationService
            .remove(deletedConfiguration.id)
            .subscribe(() => {
                this.configurations = this.configurations.filter((configuration: Configuration) => {
                    return configuration.id !== deletedConfiguration.id;
                });
            });
    }

    onUpdateConfiguration(updatedConfiguration: Configuration) {
        const data = Object.assign({}, updatedConfiguration);
        const date = new Date(updatedConfiguration.datetime);
        data.datetime = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
        this.configurationService.update(updatedConfiguration.id, data)
            .subscribe((configuration) => {
                const modalRef = this.modalService.open(ConfigurationModalContentComponent);
                this.router.navigate(['']);
            });
    }

}
