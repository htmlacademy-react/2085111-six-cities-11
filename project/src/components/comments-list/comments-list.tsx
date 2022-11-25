import CommentItem from './comment-item/comment-item';
import {Comment} from '../../types/comment';
import {MAX_AMOUNT_OF_COMMENTS} from '../../utils/const';

type CommentsListProps = {
  comments: Comment[];
}

function CommentsList({comments}: CommentsListProps): JSX.Element {
  const compareDates = (a: Comment, b: Comment) => Date.parse(b.date) - Date.parse(a.date);
  const sortComments = comments.sort(compareDates);
  const finalComments = sortComments.slice(0, MAX_AMOUNT_OF_COMMENTS);

  return (
    <ul className="reviews__list">
      {finalComments.map((comment) => <CommentItem commentItem={comment} key={comment.id} />)}
    </ul>
  );
}

export default CommentsList;
