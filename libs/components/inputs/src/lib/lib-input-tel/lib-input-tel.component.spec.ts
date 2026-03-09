import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibInputTelComponent } from './lib-input-tel.component';

describe('LibInputTelComponent', () => {
  let component: LibInputTelComponent;
  let fixture: ComponentFixture<LibInputTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibInputTelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibInputTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
