import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/02cda9089360645c1b1c60e1c186cc68~c5_300x300.webp?x-expires=1669471200&x-signature=zAp13Q4mlzUZ%2B55A2cfz2Pdr2rY%3D"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van Trang</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>su_trang</span>
      </div>
    </div>
  );
}

export default AccountItem;
