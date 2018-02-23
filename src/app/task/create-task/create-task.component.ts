import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../task.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
    protected formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder, private taskService: TaskService, private router: Router) {
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

            this.taskService
                .insert(data)
                .subscribe((task) => {
                    this.router.navigate(['']);
                });
        }
    }

}
