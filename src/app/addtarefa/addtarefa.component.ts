import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-addtarefa',
  templateUrl: './addtarefa.component.html',
  styleUrls: ['./addtarefa.component.css']
})
export class AddtarefaComponent implements OnInit {


  descricao:string = ""


  @Output() eventNovoItem = new EventEmitter<string>()



  constructor() {
   }

  ngOnInit(): void {
  }

  add() {
    this.eventNovoItem.emit(this.descricao)
  }

}
