import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfigurationService} from "../configuration.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-edit-configuration',
    templateUrl: './edit-configuration.component.html',
    styleUrls: ['./edit-configuration.component.css']
})
export class EditConfigurationComponent implements OnInit {
    private configurationId = null;

    protected formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private configurationService: ConfigurationService,
                private router: Router,
                private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.configurationId = params.id;
            this.configurationService.get(this.configurationId).subscribe((configuration) => {
                configuration.datetime = new Date(configuration.datetime);
                this.formGroup = this.formBuilder.group({
                    'id': this.formBuilder.control(configuration.id, Validators.compose([Validators.required])),
                    'key': this.formBuilder.control(configuration.key, Validators.compose([Validators.required])),
                    'value': this.formBuilder.control(configuration.value, Validators.compose([Validators.required])),
                    'environment': this.formBuilder.control(configuration.environment, Validators.compose([Validators.required])),
                    'datetime': this.formBuilder.control({
                        year: configuration.datetime.getFullYear(),
                        month: configuration.datetime.getMonth() + 1,
                        day: configuration.datetime.getDate()
                    }, Validators.compose([Validators.required])),
                    'version': this.formBuilder.control(configuration.version, Validators.compose([Validators.required])),
                    'context': this.formBuilder.control(configuration.context, Validators.compose([Validators.required])),
                    'secured': this.formBuilder.control(configuration.secured, Validators.compose([Validators.required])),
                });
            });
        });
    }

    ngOnInit() {
    }


    onSubmit() {
        if (this.formGroup.valid) {
            const value = this.formGroup.value;

            const data = Object.assign({}, this.formGroup.value);
            data.datetime = new Date(value.datetime.year, value.datetime.month - 1, value.datetime.day);

            this.configurationService.update(this.configurationId, data)
                .subscribe((configuration) => {
                    this.router.navigate(['']);
                });
        }
    }
}
