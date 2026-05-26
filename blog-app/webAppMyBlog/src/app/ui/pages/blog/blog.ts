import { Component } from '@angular/core';
import { AddArticleForm } from '../../components/add-article-form/add-article-form'; 
import { Aside } from '../../components/aside/aside';
import { StatisticDialog } from '../../components/statistic-dialog/statistic-dialog';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [StatisticDialog, AddArticleForm, Aside],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
  // Добавляем блок анимаций:
  animations: [
    trigger('slideInOut', [
      // Момент появления в DOM (плавно увеличиваем высоту и прозрачность)
      transition(':enter', [
        style({ height: '0px', opacity: 0, overflow: 'hidden' }),
        animate('400ms ease-in-out', style({ height: '*', opacity: 1 }))
      ]),
      // Момент удаления из DOM (плавно схлопываем обратно в 0)
      transition(':leave', [
        style({ height: '*', overflow: 'hidden' }),
        animate('400ms ease-in-out', style({ height: '0px', opacity: 0 }))
      ])
    ])
  ]
})
export class BlogComponent {
  isFormVisible: boolean = false;
  isDialogVisible: boolean = false;

  toggleForm(show: boolean) {
    this.isFormVisible = show;
  }

  toggleDialog(show: boolean) {
    this.isDialogVisible = show;
  }
}