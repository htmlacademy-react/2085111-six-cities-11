import { useState, MouseEvent, ChangeEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postNewCommentAction } from '../../store/api-actions';
import { getPostingStatus } from '../../store/comments-process/selectors';

type CommentFormProps = {
  id: number;
};

function CommentForm({ id }: CommentFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const isPostingLoading = useAppSelector(getPostingStatus);

  const [formData, setFormData] = useState({
    rating: '',
    comment: '',
    isRatingOk: false,
    isCommentOk: false,
  });

  const isButtonDisabled = !formData.isRatingOk || !formData.isCommentOk || isPostingLoading;

  const starClickHandle = (evt: MouseEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: evt.currentTarget.value,
      isRatingOk: true,
    });
  };

  const commentChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const currentComment = evt.currentTarget.value;
    const isCommentLengthOk = currentComment.length >= 50;
    setFormData((prev) => ({
      ...prev,
      comment: currentComment,
      isCommentOk: isCommentLengthOk,
    }));
  };

  const commentSubmitHandle = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(postNewCommentAction({
      id,
      comment: formData.comment,
      rating: Number(formData.rating),
    })).then((response) => {
      if (response.payload) {
        formRef.current && formRef.current.reset();

        setFormData({
          rating: '',
          comment: '',
          isRatingOk: false,
          isCommentOk: false,
        });
      }
    });
  };

  return (
    <form ref={formRef} className="reviews__form form" action="#" method="post" onSubmit={commentSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onClick={(evt) => (starClickHandle(evt))} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onClick={starClickHandle} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onClick={starClickHandle} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onClick={starClickHandle} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onClick={starClickHandle} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={(evt) => commentChangeHandle(evt)}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
