import { IComment } from '../../interfaces';
import { CommentItem } from '../CommentItem/CommentItem';
import styles from './CommentList.module.css';

interface IProps {
  commentsData: IComment[];
}

const CommentList = ({ commentsData }: IProps) => {
  return (
    <div className={styles.commentListContainer}>
      <p className={styles.title}>Comments for post</p>
      {commentsData.map((comment, i) => (
        <CommentItem counter={i} key={comment.id} commentsData={comment} />
      ))}
    </div>
  );
};

export { CommentList };
