import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Configuration} from "./configuration.model";

@Injectable()
export class ConfigurationService {

    constructor(private httpClient: HttpClient) {
    }

    getAll(): Observable<Configuration[]> {
        return this.httpClient.get<Configuration[]>('/api/configurations');
    }

    get(configurationId: number): Observable<Configuration> {
        return this.httpClient.get<Configuration>(`/api/configurations/${configurationId}`);
    }

    insert(configuration: Configuration): Observable<Configuration> {
        return this.httpClient.post<Configuration>('/api/configurations', configuration);
    }

    remove(configurationID: number): Observable<void> {
        return this.httpClient.delete<void>(`/api/configurations/${configurationID}`);
    }

    update(configurationId: number, configuration: Configuration): Observable<Configuration> {
        return this.httpClient.put<Configuration>(`/api/configurations`, configuration);
    }
}
