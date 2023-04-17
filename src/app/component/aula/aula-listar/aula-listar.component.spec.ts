import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaListarComponent } from './aula-listar.component';

describe('AulaListarComponent', () => {
  let component: AulaListarComponent;
  let fixture: ComponentFixture<AulaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulaListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
