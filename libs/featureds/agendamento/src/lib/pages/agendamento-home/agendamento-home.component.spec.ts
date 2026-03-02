import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendamentoHomeComponent } from './agendamento-home.component';

describe('AgendamentoHomeComponent', () => {
  let component: AgendamentoHomeComponent;
  let fixture: ComponentFixture<AgendamentoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendamentoHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendamentoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
