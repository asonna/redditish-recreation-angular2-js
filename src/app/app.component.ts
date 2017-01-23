import { Component } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redditish';

  masterCategoryList: Category[] = [
    new Category('cats', 'Cats', 'A place for cats'),
    new Category('coding', 'Coding', 'A place for coders'),
    new Category('devops', 'Devops', 'A place for devops'),
    new Category('dogs', 'Dogs', 'A place for dogs'),
    new Category('epicodus', 'Epicodus', 'A place for Epicodus students'),
    new Category('family', 'Family', 'A place for family values')
  ];
}
