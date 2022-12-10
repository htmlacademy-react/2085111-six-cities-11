import { Comment } from "./comment";

export type NewComment = Pick<Comment, 'id' | 'rating' | 'comment'>;
