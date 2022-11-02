import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

function NotFound(): JSX.Element {
  const DivStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  } as const;

  return (
    <div className="page page--gray" style={DivStyle}>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Root}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;
