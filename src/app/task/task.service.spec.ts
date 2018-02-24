import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import {HttpClient} from "@angular/common/http";

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService, HttpClient]
    });
  });
});
