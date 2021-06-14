import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtarefaComponent } from './addtarefa.component';

describe('AddtarefaComponent', () => {
  let component: AddtarefaComponent;
  let fixture: ComponentFixture<AddtarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
