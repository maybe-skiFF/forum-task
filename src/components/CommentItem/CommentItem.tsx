import styles from './CommentItem.module.css';

const CommentItem = () => {
  return (
    <div className={styles.detailedPostContent}>
      <span className={styles.commentItemTitle}>Comment #TODO</span>
      <span className={styles.commentItemDescr}>Name:</span>
      <span className={styles.commentItemDescr}>Email:</span>
      <span className={styles.commentItemDescr}>Message:</span>
    </div>
  );
};

export { CommentItem };
