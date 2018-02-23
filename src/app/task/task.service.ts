import {Task} from "./task.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TaskService {

    constructor(private httpClient: HttpClient) {
    }

    getAll(): Observable<Task[]> {
        return this.httpClient.get<Task[]>('/api/tasks');
    }

    get(taskId: number): Observable<Task> {
        return this.httpClient.get<Task>(`/api/tasks/${taskId}`);
    }

    insert(task: Task): Observable<Task> {
        return this.httpClient.post<Task>('/api/tasks', task);
    }

    remove(taskId: number): Observable<void> {
        return this.httpClient.delete<void>(`/api/tasks/${taskId}`);
    }

    update(taskId: number, task: Task): Observable<Task> {
        return this.httpClient.put<Task>(`/api/tasks`, task);
    }
}
