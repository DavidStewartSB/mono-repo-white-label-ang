import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellAdminToolbarComponent } from './shell-admin-toolbar.component';

describe('ShellAdminToolbarComponent', () => {
  let component: ShellAdminToolbarComponent;
  let fixture: ComponentFixture<ShellAdminToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellAdminToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellAdminToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
