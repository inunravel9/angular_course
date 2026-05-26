import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-article-form',
  imports: [],
  templateUrl: './add-article-form.html',
  styleUrl: './add-article-form.scss',
})
export class AddArticleForm {
  @Input() isOpen: boolean = false;

  @Output() closeForm = new EventEmitter<void>();

  onCancel() {
    this.closeForm.emit();
  }
}
