import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-edit-task',
    templateUrl: './edit-task.component.html',
    styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
    private taskId = null;

    protected formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder, private taskService: TaskService, private router: Router, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.taskId = params.id;
            this.taskService.get(this.taskId).subscribe((task) => {
                task.datetime = new Date(task.datetime);
                this.formGroup = this.formBuilder.group({
                    'id': this.formBuilder.control(task.id, Validators.compose([Validators.required])),
                    'key': this.formBuilder.control(task.key, Validators.compose([Validators.required])),
                    'value': this.formBuilder.control(task.value, Validators.compose([Validators.required])),
                    'environment': this.formBuilder.control(task.environment, Validators.compose([Validators.required])),
                    'datetime': this.formBuilder.control({
                        year: task.datetime.getFullYear(),
                        month: task.datetime.getMonth() + 1,
                        day: task.datetime.getDate()
                    }, Validators.compose([Validators.required])),
                    'version': this.formBuilder.control(task.version, Validators.compose([Validators.required])),
                    'context': this.formBuilder.control(task.context, Validators.compose([Validators.required])),
                    'secured': this.formBuilder.control(task.secured, Validators.compose([Validators.required])),
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

            this.taskService.update(this.taskId, data)
                .subscribe((task) => {
                    this.router.navigate(['']);
                });
        }
    }
}
