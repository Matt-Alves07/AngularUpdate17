import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
  public name: string = 'John Doe';
  public isDisabled: boolean = true;
  public inputName: string = '';

  public onMouseMove(event: MouseEvent) {
    return console.log(event);
  }
}
