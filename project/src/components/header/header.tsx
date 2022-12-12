import {useAppSelector} from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import {AuthorizationStatus} from '../../utils/const';
import HeaderAuth from './header-auth/header-auth';
import HeaderNoAuth from './header-auth/header-no-auth';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <nav className="header__nav">
      {authorizationStatus === AuthorizationStatus.Auth ? <HeaderAuth /> : <HeaderNoAuth />}
    </nav>
  );
}

export default Header;
