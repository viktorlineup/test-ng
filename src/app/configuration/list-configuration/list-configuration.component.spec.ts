import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskComponent } from './list-task.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryService} from "../in-memory.service";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";


describe('ListTaskComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryService, { dataEncapsulation: false }
        ),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
      ],
      declarations: [
      ],
    });
  });
});
