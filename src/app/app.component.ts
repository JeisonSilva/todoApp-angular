import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';

  tarefas: string[]=[];

  addItem(item:string) {
    this.tarefas.push(item);
  }
}

