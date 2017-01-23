import { UserComment } from './user-comment.model';

export class Post {
  public comments: UserComment[] = [];
  public datePosted: Date = new Date();
  public upvote: number = 0;
  public downvote: number = 0;
  public icon: string = '';

  constructor(public author: string, public title: string, public content: string) {}

  countComments() {
    return this.comments.length;
  }

  saveComment(comment) {
    this.comments.push(comment);
  }
}
