import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiInputPhotoComponent } from './ui-input-photo.component';

describe('UiInputPhotoComponent', () => {
  let component: UiInputPhotoComponent;
  let fixture: ComponentFixture<UiInputPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiInputPhotoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiInputPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
