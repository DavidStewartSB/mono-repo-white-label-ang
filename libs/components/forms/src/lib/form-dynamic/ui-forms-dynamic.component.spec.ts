import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiFormsDynamicComponent } from './ui-forms-dynamic.component';

describe('UiFormsDynamicComponent', () => {
  let component: UiFormsDynamicComponent;
  let fixture: ComponentFixture<UiFormsDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiFormsDynamicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiFormsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
