import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellAdminSidebarComponent } from './shell-admin-sidebar.component';

describe('ShellAdminSidebarComponent', () => {
  let component: ShellAdminSidebarComponent;
  let fixture: ComponentFixture<ShellAdminSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellAdminSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
