import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BlogService } from '../services/blog.service';

@Component({
  template: `
    <ui-hero title="Blog" description="This is what a blog would look like..."></ui-hero>
    <div class="row">
      <div class="col-8 offset-2">
        <post-list [posts]="posts$ | async"></post-list>
      </div>
    </div>
  `,
})
export class BlogIndexComponent implements OnInit {
  public url: string;
  public posts$: Observable<any>;

  constructor(public route: ActivatedRoute, public service: BlogService) {}

  ngOnInit() {
    this.posts$ = this.route.url.pipe(
      map(segments => segments.map(segment => segment.path).join('/')),
      tap(url => (this.url = url)),
      switchMap(url => this.service.getPosts()),
    );
  }
}
