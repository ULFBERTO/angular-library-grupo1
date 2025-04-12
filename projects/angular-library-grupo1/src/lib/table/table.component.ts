import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
}
