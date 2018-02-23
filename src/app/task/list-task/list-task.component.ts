import {Component, OnInit} from "@angular/core";
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

    public tasks = [];

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.taskService.getAll()
            .subscribe((tasks) => {
                this.tasks = tasks;
            });
    }

    onDeleteTask(deletedTask: Task) {
        this.taskService
            .remove(deletedTask.id)
            .subscribe(() => {
                this.tasks = this.tasks.filter((task: Task) => {
                    return task.id !== deletedTask.id;
                });
            });
    }

}
