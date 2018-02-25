import {async, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
          RouterModule.forRoot(
              appRoutes,
              {enableTracing: false}
          )
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
