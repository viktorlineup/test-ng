import { TestBed, inject } from '@angular/core/testing';

import { ConfigurationService } from './task.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigurationService, HttpClient, HttpHandler]
    });
  });
    it('should be created', inject([TaskService], (service: TaskService) => {
        expect(service).toBeTruthy();
    }));
});
