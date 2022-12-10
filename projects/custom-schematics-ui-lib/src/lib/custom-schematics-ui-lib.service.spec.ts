import { TestBed } from '@angular/core/testing';

import { CustomSchematicsUiLibService } from './custom-schematics-ui-lib.service';

describe('CustomSchematicsUiLibService', () => {
  let service: CustomSchematicsUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomSchematicsUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
