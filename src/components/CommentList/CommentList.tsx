import { CommentItem } from '../CommentItem/CommentItem';
import styles from './CommentList.module.css';

const CommentList = () => {
  return (
    <div className={styles.commentListContainer}>
      <p className={styles.title}>Comments for post #TODO</p>
      <CommentItem />
    </div>
  );
};

export { CommentList };
