import css from './Button.module.css';
import { useImagesContext } from 'components/ImagesContext/ImagesContext';

export const Button = () => {
  const { ifLoadMore } = useImagesContext();
  return (
    <button className={css.Button} type="button" onClick={ifLoadMore}>
      Load more
    </button>
  );
};
