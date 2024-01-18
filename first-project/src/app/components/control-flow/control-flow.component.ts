import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  public isDeveExibirTexto: boolean = false;
  public dataList$: Observable<string[]> = of([
    'Item da lista 1',
    'Item da lista 2',
    'Item da lista 3',
    'Item da lista 4',
    'Item da lista 5',
  ]).pipe(delay(3000));
  public switchCondition: string = "X";
}
