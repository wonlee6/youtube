import React from 'react';
import styles from './side_menu.module.css';
import { faHome, faCompass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SideMenu = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.sideName}>
          <FontAwesomeIcon icon={faHome} />홈
        </li>
        <li>
          <FontAwesomeIcon icon={faCompass} />
          탐색
        </li>
        <li>구독</li>
        <hr />
        <li>보관함</li>
        <li>시청기록</li>
        <li>내 동영상</li>
        <li>나중에 볼 동영상</li>
        <li>좋아요 표시한 동영상</li>
        <li>생방송 중 동영상</li>
        <hr />
        <h3>구독</h3>
        <li>드림 코딩 by 엘리</li>
      </ul>
    </div>
  );
};

export default SideMenu;
