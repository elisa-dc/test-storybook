import { async, TestBed } from '@angular/core/testing';
import { MyFirstLibModule } from './my-first-lib.module';

describe('MyFirstLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyFirstLibModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyFirstLibModule).toBeDefined();
  });
});
