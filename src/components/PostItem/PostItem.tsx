import { IPost } from '../../interfaces';
import { formatLengthDescr } from '../../utils/formatLengthDescr';
import styles from './PostItem.module.css';

import starImgActive from '../../../public/star-solid.svg';
import starImgNonActive from '../../../public/star-regular.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPostToFavorite,
  removePostFromFavorites,
} from '../../redux/favoritePostsSlice';
import { RootState } from '../../redux/store';

interface IProps {
  postData: IPost;
}

const PostItem = ({ postData }: IProps) => {
  const { title, body } = postData;
  const dispatch = useDispatch();

  const favoritesPosts = useSelector(
    (state: RootState) => state.favoritesPosts.favoritesPosts,
  );

  const isInFavorites = favoritesPosts.some(post => post.id === postData.id);

  const addToFavoriteToggler = () => {
    if (!isInFavorites) dispatch(addPostToFavorite(postData));
    else dispatch(removePostFromFavorites(postData.id));
  };

  return (
    <div className={styles.postItemContainer}>
      <img
        onClick={() => addToFavoriteToggler()}
        className={styles.favoriteImg}
        src={!isInFavorites ? starImgNonActive : starImgActive}
        alt="star"
      />
      <div className={styles.postItemContent}>
        <span className={styles.postItemTitle}>{title}</span>
        <span className={styles.postItemDescription}>
          {formatLengthDescr(body)}
        </span>
      </div>
    </div>
  );
};

export { PostItem };
