import css from './ImageGalleryItem.module.css';
import { useImagesContext } from 'components/ImagesContext/ImagesContext';

export const ImageGalleryItem = ({ imgUrl, imgAlt, largeImgUrl }) => {
  const { openModal } = useImagesContext();
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => openModal(largeImgUrl, imgAlt)}
    >
      <img className={css.ImageGalleryItemImage} src={imgUrl} alt={imgAlt} />
    </li>
  );
};
