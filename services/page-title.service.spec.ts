import { inject, TestBed } from '@angular/core/testing';

import { LoggingService } from '../../../logger/logging.service';
import { MockLoggingService } from '../../../utilities/tests/mock-logging.service';
import { PageTitleService } from './page-title.service';

describe('PageTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LoggingService, useValue: new MockLoggingService() }
      ]
    });
  });

  it('should be created', inject([PageTitleService], (service: PageTitleService) => {
    expect(service).toBeTruthy();
  }));
});
