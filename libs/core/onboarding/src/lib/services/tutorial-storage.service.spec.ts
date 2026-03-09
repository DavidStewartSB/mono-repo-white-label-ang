import { TestBed } from '@angular/core/testing';

import { TutorialStorageService } from './tutorial-storage.service';

describe('TutorialStorageService', () => {
  let service: TutorialStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
