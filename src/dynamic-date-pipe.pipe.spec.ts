import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DynamicDatePipePipe } from './dynamic-date-pipe.pipe';

describe('DynamicDatePipePipe', () => {
  let pipe: DynamicDatePipePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [DynamicDatePipePipe]
    });

    pipe = TestBed.inject(DynamicDatePipePipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
