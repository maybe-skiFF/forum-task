import styles from './PopapAccept.module.css';
import { useEffect } from 'react';
import cross from '../../../public/cross.png';
import popapImg from '../../../public/accept-img.png';

interface IProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const PopapAccept = ({ isVisible, setIsVisible }: IProps) => {
  const closePopap = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      closePopap();
    }, 2000);

    return () => clearTimeout(time);
  });

  if (!isVisible) return null;

  return (
    <>
      <div className={styles.popapOverlay} onClick={closePopap}></div>
      <div className={styles.popapWrapper}>
        <img
          onClick={closePopap}
          className={styles.crossImg}
          src={cross}
          alt="cross"
        />
        <img className={styles.popapImg} src={popapImg} alt="popapImg" />
        <p className={styles.popapText}>User data update!</p>
      </div>
    </>
  );
};

export { PopapAccept };
