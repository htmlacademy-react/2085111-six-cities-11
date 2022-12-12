import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logoutAction } from '../../../store/api-actions';
import { getFavoriteOffers } from '../../../store/offers-process/selectors';
import { getEmail } from '../../../store/user-process/selectors';
import { AppRoute } from '../../../utils/const';

function HeaderAuth(): JSX.Element {
  const dispatch = useAppDispatch();
  const email = useAppSelector(getEmail);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <ul className='header__nav-list'>
      <li className='header__nav-item user'>
        <Link className='header__nav-link header__nav-link--profile' to={AppRoute.Favorites}>
          <div className='header__avatar-wrapper user__avatar-wrapper'>
          </div>
          <span className='header__user-name user__name'>{email}</span>
          <span className='header__favorite-count'>{favoriteOffers.length}</span>
        </Link>
      </li>
      <li className='header__nav-item'>
        <Link
          className='header__nav-link'
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to={AppRoute.Root}
        >
          <span className='header__signout'>
            Sign out
          </span>
        </ Link>
      </li>
    </ul>
  );
}

export default HeaderAuth;
