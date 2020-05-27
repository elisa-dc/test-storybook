import { async, TestBed } from '@angular/core/testing';
import { MySecondLibModule } from './my-second-lib.module';

describe('MySecondLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MySecondLibModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MySecondLibModule).toBeDefined();
  });
});
