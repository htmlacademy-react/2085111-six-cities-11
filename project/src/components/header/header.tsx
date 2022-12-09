import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../utils/const';
import HeaderAuth from './header-auth';
import HeaderNoAuth from './header-no-auth';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <nav className="header__nav">
      {authorizationStatus === AuthorizationStatus.Auth ? <HeaderAuth /> : <HeaderNoAuth />}
    </nav>
  );
}

export default Header;
