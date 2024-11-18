import { useForm } from 'react-hook-form';
import styles from './CommentForm.module.css';
import { IComment, ICommentFormData } from '../../interfaces';

interface IProps {
  setCommentsData: (
    data: IComment[] | ((prev: IComment[]) => IComment[]),
  ) => void;
}

const CommentForm = ({ setCommentsData }: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICommentFormData>();

  const onSubmit = (data: ICommentFormData) => {
    const commentBuffer: IComment = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      body: data.body,
    };

    setCommentsData((prev: IComment[]) => [...prev, commentBuffer]);
    reset();
  };

  return (
    <div className={styles.formContainer}>
      <p className={styles.title}>Add new comment:</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
        <div className={styles.formElementWrapper}>
          <label className={styles.formLabel} htmlFor="name">
            Name:
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            className={styles.formInput}
            type="text"
            id="name"
          />
          {errors.name && (
            <span className={styles.formErrorText}>{errors.name.message}</span>
          )}
        </div>
        <div className={styles.formElementWrapper}>
          <label className={styles.formLabel} htmlFor="email">
            Email:
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid Email',
              },
            })}
            className={styles.formInput}
            type="email"
            id="email"
          />
          {errors.email && (
            <span className={styles.formErrorText}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.formElementWrapper}>
          <label className={styles.formLabel} htmlFor="body">
            Message:
          </label>
          <textarea
            {...register('body', { required: 'Message is required' })}
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

export { CommentForm };
