import { Post } from './post.model';

export class Category {
  public datePosted: Date = new Date();
  public posts: Post[] = [];

  constructor(public route: string, public name: string, public description: string) {}

  savePost(post) {
    this.posts.push(post);
  }
}
