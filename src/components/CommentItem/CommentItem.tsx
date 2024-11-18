import { IComment } from '../../interfaces';
import styles from './CommentItem.module.css';

interface IProps {
  commentsData: IComment;
  counter: number;
}

const CommentItem = ({ commentsData, counter }: IProps) => {
  const { name, email, body } = commentsData;

  return (
    <div className={styles.detailedPostContent}>
      <span className={styles.commentItemTitle}>Comment #{counter + 1}</span>
      <span className={styles.commentItemDescr}>
        <b>Name:</b> {name}
      </span>
      <span className={styles.commentItemDescr}>
        <b>Email:</b> {email}
      </span>
      <span className={styles.commentItemDescr}>
        <b>Message:</b> {body}
      </span>
    </div>
  );
};

export { CommentItem };
