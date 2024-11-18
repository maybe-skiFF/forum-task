import { Link } from 'react-router-dom';
import styles from './DetailedPostItem.module.css';
import arrowLeft from '../../../public/arrow-left.png';
import { IPost } from '../../interfaces';

interface IProps {
  postData: IPost;
}

const DetailedPostItem = ({ postData }: IProps) => {
  const { id, title, body } = postData;

  return (
    <div className={styles.detailedPostContainer}>
      <Link
        style={{ textDecoration: 'none', width: 'max-content' }}
        to="/posts"
      >
        <button className={styles.backBtn}>
          <img
            className={styles.arrowLeftImg}
            src={arrowLeft}
            alt="arrowLeft"
          />
          Back
        </button>
      </Link>
      <p className={styles.title}>Detailed post #{id}</p>
      <div className={styles.detailedPostContent}>
        <p className={styles.detailedPostTitle}>Title: {title}</p>
        <p className={styles.detailedPostDescr}>
          <i>Description:</i> {body}
        </p>
      </div>
    </div>
  );
};

export { DetailedPostItem };
