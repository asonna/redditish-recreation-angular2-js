export class UserComment {
  public datePosted: Date = new Date();
  public upvote: number = 0;
  public downvote: number = 0;

  constructor(public author: string, public content: string) {}
}
