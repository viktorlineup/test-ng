import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfigurationService} from "../configuration.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create-configuration',
    templateUrl: './create-configuration.component.html',
    styleUrls: ['./create-configuration.component.scss']
})
export class CreateConfigurationComponent implements OnInit {
    protected formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder, private configurationService: ConfigurationService, private router: Router) {
        this.formGroup = this.formBuilder.group({
            'key': this.formBuilder.control(null, Validators.compose([Validators.required])),
            'value': this.formBuilder.control(null, Validators.compose([Validators.required])),
            'environment': this.formBuilder.control(null, Validators.compose([Validators.required])),
            'datetime': this.formBuilder.control(null, Validators.compose([Validators.required])),
            'version': this.formBuilder.control(null, Validators.compose([Validators.required])),
            'context': this.formBuilder.control(null, Validators.compose([Validators.required])),
            'secured': this.formBuilder.control(false, Validators.compose([Validators.required])),
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        if (this.formGroup.valid) {
            const value = this.formGroup.value;

            const data = Object.assign({}, this.formGroup.value);
            data.datetime = new Date(value.datetime.year, value.datetime.month - 1, value.datetime.day);

            this.configurationService
                .insert(data)
                .subscribe((configuration) => {
                    this.router.navigate(['']);
                });
        }
    }

}
