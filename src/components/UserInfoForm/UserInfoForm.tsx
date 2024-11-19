import { Link } from 'react-router-dom';
import styles from './UserInfoForm.module.css';
import arrowLeft from '../../../public/arrow-left.png';
import { useForm } from 'react-hook-form';
import { IFormUserData } from '../../interfaces';

const UserInfoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormUserData>();

  const onSubmit = (data: IFormUserData) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.userInfoFormContainer}>
      <Link className={styles.backLink} to="/">
        <button className={styles.backBtn}>
          <img
            className={styles.arrowLeftImg}
            src={arrowLeft}
            alt="arrowLeft"
          />
          Back
        </button>
      </Link>
      <div className={styles.userInfoSectionWrapper}>
        <p className={styles.userInfoTitle}>User data</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.userInfoForm}>
          <div className={styles.formField}>
            <label className={styles.labelText} htmlFor="name">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className={styles.formInput}
              type="text"
              name="name"
            />
            {errors.name && (
              <span className={styles.formErrorText}>
                {errors.name.message}
              </span>
            )}
          </div>
          <div className={styles.formField}>
            <label className={styles.labelText} htmlFor="username">
              Username
            </label>
            <input
              {...register('username', { required: 'UserName is required' })}
              className={styles.formInput}
              type="text"
              name="username"
            />
            {errors.username && (
              <span className={styles.formErrorText}>
                {errors.username.message}
              </span>
            )}
          </div>
          <div className={styles.formField}>
            <label className={styles.labelText} htmlFor="email">
              Email
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
              name="email"
            />
            {errors.email && (
              <span className={styles.formErrorText}>
                {errors.email.message}
              </span>
            )}
          </div>
          <div className={styles.formField}>
            <label className={styles.labelText} htmlFor="city">
              City
            </label>
            <input
              {...register('city', { required: 'City is required' })}
              className={styles.formInput}
              type="text"
              name="city"
            />
            {errors.city && (
              <span className={styles.formErrorText}>
                {errors.city.message}
              </span>
            )}
          </div>
          <div className={styles.formField}>
            <label className={styles.labelText} htmlFor="phone">
              Phone
            </label>
            <input
              {...register('phone', { required: 'Phone is required' })}
              className={styles.formInput}
              type="tel"
              name="phone"
            />
            {errors.phone && (
              <span className={styles.formErrorText}>
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className={styles.formField}>
            <label className={styles.labelText} htmlFor="company">
              Company
            </label>
            <input
              {...register('company', { required: 'Company is required' })}
              className={styles.formInput}
              type="text"
              name="company"
            />
            {errors.company && (
              <span className={styles.formErrorText}>
                {errors.company.message}
              </span>
            )}
          </div>
          <button type="submit" className={styles.formBtn}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export { UserInfoForm };
