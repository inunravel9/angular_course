import { Component } from '@angular/core';
import { AddArticleForm } from '../../components/add-article-form/add-article-form'; 
import { Aside } from '../../components/aside/aside';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [AddArticleForm, Aside],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent {
  // 3. Переменная состояния: по умолчанию false (форма скрыта)
  isFormVisible = false;

  // Метод для открытия формы
  openForm() {
    this.isFormVisible = true;
  }

  // Метод для закрытия формы
  closeForm() {
    this.isFormVisible = false;
  }
}