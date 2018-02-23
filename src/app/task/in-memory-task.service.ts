import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable()
export class InMemoryTaskService implements InMemoryDbService {
    createDb(): {} {
        const tasks = [
            {
                id: 1,
                key: 'key1',
                value: 'value1',
                environment: 'environment1',
                datetime: new Date(),
                version: 'version1',
                context: 'context1',
                secured: true
            },
            {
                id: 2,
                key: 'key2',
                value: 'value2',
                environment: 'environment2',
                datetime: new Date(),
                version: 'version2',
                context: 'context2',
                secured: false
            },
        ];
        return {tasks};
    }

    constructor() {
    }

}
