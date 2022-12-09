import {useState} from 'react';
import cn from 'classnames';
import {sortTypes} from '../../utils/const';
import SortItem from './sort-item/sort-item';

type SortProps = {
  sortTypeClickHandler: (sortName: string) => void;
}

function Sort({sortTypeClickHandler}: SortProps): JSX.Element {
  const [isSortListShown, setIsSortListShown] = useState(false);
  const [activeSortType, setActiveSortType] = useState(sortTypes.POPULAR);

  const sortItemClickHandler = (sortName: string) => {
    sortTypeClickHandler(sortName);
    setIsSortListShown(((prev) => !prev));
    setActiveSortType(sortName);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsSortListShown((prev) => !prev)}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', {'places__options--opened': isSortListShown})}>
        {Object.values(sortTypes).map((sort) => <SortItem name={sort} activeSortType={activeSortType} sortItemClickHandler={sortItemClickHandler} key={sort}/>)}
      </ul>
    </form>
  );
}

export default Sort;
