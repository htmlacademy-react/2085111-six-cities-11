import cn from 'classnames';

type CityProps = {
  name: string;
  cityClickHandler: (name: string) => void;
  isActive: boolean;
}

function City({name, cityClickHandler, isActive}: CityProps): JSX.Element {
  return (
    <li className="locations__item" onClick={() => cityClickHandler(name)}>
      <a className={cn('locations__item-link tabs__item', {'tabs__item--active': isActive})} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}

export default City;
