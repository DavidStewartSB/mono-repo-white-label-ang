import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellLayoutAdminComponent } from './shell-layout-admin.component';

describe('ShellLayoutAdminComponent', () => {
  let component: ShellLayoutAdminComponent;
  let fixture: ComponentFixture<ShellLayoutAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellLayoutAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellLayoutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
