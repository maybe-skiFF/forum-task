import { useForm } from 'react-hook-form';
import styles from './PostForm.module.css';
import { IPost, IPostFormData } from '../../interfaces';

const PostForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPostFormData>();

  const onSubmit = (data: IPostFormData) => {
    const commentBuffer: IPost = {
      id: Date.now(),
      userId: 1,
      title: data.title,
      body: data.body,
    };

    // setCommentsData((prev: IComment[]) => [...prev, commentBuffer]);
    reset();
  };

  return (
    <div className={styles.formContainer}>
      <p className={styles.title}>Create new post:</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
        <div className={styles.formElementWrapper}>
          <label className={styles.formLabel} htmlFor="title">
            Title:
          </label>
          <input
            {...register('title', { required: 'Title is required' })}
            className={styles.formInput}
            type="text"
            id="title"
          />
          {errors.title && (
            <span className={styles.formErrorText}>{errors.title.message}</span>
          )}
        </div>
        <div className={styles.formElementWrapper}>
          <label className={styles.formLabel} htmlFor="body">
            Description:
          </label>
          <textarea
            {...register('body', { required: 'Description is required' })}
            className={styles.formInput}
            id="body"
          />
          {errors.body && (
            <span className={styles.formErrorText}>{errors.body.message}</span>
          )}
        </div>
        <button className={styles.formButton} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export { PostForm };
