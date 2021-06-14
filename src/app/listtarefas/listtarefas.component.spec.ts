import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtarefasComponent } from './listtarefas.component';

describe('ListtarefasComponent', () => {
  let component: ListtarefasComponent;
  let fixture: ComponentFixture<ListtarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
