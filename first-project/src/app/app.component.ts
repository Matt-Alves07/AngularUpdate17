import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TemplateComponent } from './components/template/template.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { DeferrableViewsComponent } from './components/template/deferrable-views/deferrable-views.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TemplateComponent,
    ControlFlowComponent,
    NewComponentComponent,
    DeferrableViewsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-project';
}
