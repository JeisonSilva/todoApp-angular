import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtarefas',
  templateUrl: './listtarefas.component.html',
  styleUrls: ['./listtarefas.component.css']
})
export class ListtarefasComponent implements OnInit {

  @Input() tarefas:string[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
