import cn from 'classnames';

type SortItemProps = {
  name: string;
  activeSortType: string;
  sortItemClickHandler: (sortName: string) => void;
};

function SortItem ({name, activeSortType, sortItemClickHandler}: SortItemProps): JSX.Element {
  return (
    <li className={cn('places__option', {'places__option--active': activeSortType === name})} tabIndex={0} onClick={() => sortItemClickHandler(name)}>{name}</li>
  );
}

export default SortItem;
