import {Comment} from '../../../types/comment';
import {сalculateRating} from '../../../utils/index';

type CommentItemProps = {
  commentItem: Comment;
}

const changeDateFormat = (date: string) => {
  const newDate = new Date(Date.parse(date));
  const finalDate = newDate.toLocaleString('en', { month: 'long', year: 'numeric' });
  return finalDate;
};

function CommentItem({commentItem}: CommentItemProps): JSX.Element {
  const {comment, date, rating, user} = commentItem;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${сalculateRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{changeDateFormat(date)}</time>
      </div>
    </li>
  );
}

export default CommentItem;
