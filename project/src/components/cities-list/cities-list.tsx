import {useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';
import {CITIES, DEFAULT_CITY} from '../../utils/const';
import City from './city/city';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeCity, setActiveCity] = useState(DEFAULT_CITY);

  const cityClickHandler = (name: string) => {
    setActiveCity(name);
    dispatch(changeCity(name));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => <City name={city} cityClickHandler={cityClickHandler} isActive={activeCity === city} key={city} />)}
      </ul>
    </section>
  );
}

export default CitiesList;
