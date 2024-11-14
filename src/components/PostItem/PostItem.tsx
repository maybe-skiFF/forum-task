import { IPost } from '../../interfaces';
import { formatLengthDescr } from '../../utils/formatLengthDescr';
import styles from './PostItem.module.css';

interface IProps {
  postData: IPost;
}

const PostItem = ({ postData }: IProps) => {
  const { title, body } = postData;

  return (
    <div className={styles.postItemContainer}>
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
