import { TestBed } from '@angular/core/testing';

import { LoadDataMenuService } from './load-data-menu.service';

describe('LoadDataMenuService', () => {
  let service: LoadDataMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadDataMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
