import { IPost } from '../../interfaces';
import { formatLengthDescr } from '../../utils/formatLengthDescr';
import styles from './PostItem.module.css';

import starImgActive from '../../../public/star-solid.svg';
import starImgNonActive from '../../../public/star-regular.svg';
import likeActiveBtn from '../../../public/like-active.svg';
import likeNonActiveBtn from '../../../public/like-nonactive.svg';
import dislikeActiveBtn from '../../../public/dislike-active.svg';
import dislikeNonActiveBtn from '../../../public/dislike-nonactive.svg';
import trashBtn from '../../../public/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPostToFavorite,
  removePostFromFavorites,
} from '../../redux/favoritePostsSlice';
import { RootState } from '../../redux/store';
import { useState } from 'react';
import { deletePost } from '../../services/api';
import { deletePostFromStore } from '../../redux/postsDataSlice';

interface IProps {
  postData: IPost;
}

const PostItem = ({ postData }: IProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);

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

  const likeToggler = () => {
    if (!isLiked) setIsLiked(true);
    else setIsLiked(false);

    if (isDisliked) setIsDisliked(false);
  };

  const dislikeToggler = () => {
    if (!isDisliked) setIsDisliked(true);
    else setIsDisliked(false);

    if (isLiked) setIsLiked(false);
  };

  const deletePostHandler = async () => {
    try {
      await deletePost(postData.id);
      dispatch(deletePostFromStore(postData.id));
      dispatch(removePostFromFavorites(postData.id));
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className={styles.postItemContainer}>
      <img
        onClick={() => addToFavoriteToggler()}
        className={styles.favoriteImg}
        src={!isInFavorites ? starImgNonActive : starImgActive}
        alt="Star"
      />
      <img
        onClick={() => likeToggler()}
        className={styles.likeImg}
        src={!isLiked ? likeNonActiveBtn : likeActiveBtn}
        alt="LikeBtn"
      />
      <img
        onClick={() => dislikeToggler()}
        className={styles.dislikeImg}
        src={!isDisliked ? dislikeNonActiveBtn : dislikeActiveBtn}
        alt="DislikeBtn"
      />
      <img
        onClick={() => deletePostHandler()}
        className={styles.trashBtn}
        src={trashBtn}
        alt="Trash"
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
