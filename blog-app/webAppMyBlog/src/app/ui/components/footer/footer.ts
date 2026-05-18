import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

onSubmit(event: Event) {
    event.preventDefault();
    console.log('Форма футера успешно отправлена!');
}
}