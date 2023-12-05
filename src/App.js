import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Loader } from './components/Loader/Loader';
import { Button } from './components/Button/Button';
import css from './App.module.css';
import { Error } from './components/Error/Error';
import { useImagesContext } from './components/ImagesContext/ImagesContext';

export const App = () => {
  const { images, isLoading, errorMsg, moreBtn } = useImagesContext();
  return (
    <div className={css.App}>
      <Searchbar />
      {isLoading && <Loader />}
      {errorMsg && <Error />}
      {!errorMsg && images.length !== 0 && <ImageGallery />}
      {images.length !== 0 && moreBtn && <Button />}
    </div>
  );
};
