import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() article: Article;


  constructor() {
    this.article = new Article('Angular 2','http://angular.io',10);
  }

  voteUp():Boolean {
    this.article.voteUp();
    return false;
  }

  voteDown():Boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {}
}
