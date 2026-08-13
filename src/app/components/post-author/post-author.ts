import {Component} from '@angular/core';

@Component({
  selector: 'app-post-author',
  imports: [],
  templateUrl: './post-author.html',
  host: {
    itemprop: 'author',
    itemscope: '',
    itemtype: 'https://schema.org/Person'
  }
})
export class PostAuthor {}
