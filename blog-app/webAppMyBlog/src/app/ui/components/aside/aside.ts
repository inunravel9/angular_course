import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
})
export class Aside {
  @Output() openForm = new EventEmitter<void>();
  @Output() openDialog = new EventEmitter<void>();
  
  onAddArticleClick() {
    this.openForm.emit();
  }

  onOpenStatsClick() {
    this.openDialog.emit();
  }
}
