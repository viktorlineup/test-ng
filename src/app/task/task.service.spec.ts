import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
