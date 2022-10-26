import Main from '../../pages/main/main';

type AppScreenProps = {
  placeCardCount: number;
}

function App({placeCardCount}: AppScreenProps): JSX.Element {
  return (
    <Main
      placeCardCount={placeCardCount}
    />
  );
}

export default App;
