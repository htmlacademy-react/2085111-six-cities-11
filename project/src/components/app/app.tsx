import { SettingsType } from '../..';
import Main from '../../pages/main/main';

type AppScreenProps = {
  settings: SettingsType;
}

function App({settings}: AppScreenProps): JSX.Element {
  return (
    <Main
      offersCount={settings.OffersCount}
      hotels={settings.Hotels}
    />
  );
}

export default App;
