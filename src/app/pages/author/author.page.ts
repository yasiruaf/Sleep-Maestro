import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.page.html',
  styleUrls: ['./author.page.scss'],
})
export class AuthorPage implements OnInit {

  selectedCategory: string = 'about';

  constructor() { }

  ngOnInit() {
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

}
