import React from 'react';
import styles from './side_menu.module.css';
import {
  faHome,
  faCompass,
  faBookmark,
  faArchive,
  faHistory,
  faPlayCircle,
  faClock,
  faThumbsUp,
  faStream,
  faUserTag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SideMenu = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <div className={styles.iconCover}>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.sideIcons} icon={faHome} />
            </div>
            <div className={styles.sideText}>
              <p>홈</p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.iconCover}>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.sideIcons} icon={faCompass} />
            </div>
            <div className={styles.sideText}>
              <p>탐색</p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.iconCover}>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.sideIcons} icon={faBookmark} />
            </div>
            <div className={styles.sideText}>
              <p>구독</p>
            </div>
          </div>
        </li>

        <hr />

        <li>
          <div className={styles.iconCover}>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.sideIcons} icon={faArchive} />
            </div>
            <div className={styles.sideText}>
              <p>보관함</p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.iconCover}>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.sideIcons} icon={faHistory} />
            </div>
            <div className={styles.sideText}>
              <p>시청기록</p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.iconCover}>
            <div className={styles.icons}>
              <FontAwesomeIcon
                className={styles.sideIcons}
                icon={faPlayCircle}
              />
            </div>
            <div className={styles.sideText}>
              <p>내 동영상</p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.iconCover}>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.sideIcons} icon={faClock} />
            </div>
            <div className={styles.sideText}>
              <p>나중에 볼 동영상</p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.iconCover}>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.sideIcons} icon={faThumbsUp} />
            </div>
            <div className={styles.sideText}>
              <p>좋아요 표시한 동영상</p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.iconCover}>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.sideIcons} icon={faStream} />
            </div>
            <div className={styles.sideText}>
              <p>생방송 중 동영상</p>
            </div>
          </div>
        </li>
        <hr />
        <div className={styles.iconCover}>
          <h3>구독</h3>
        </div>
        <li>
          <div className={styles.iconCover}>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.sideIcons} icon={faUserTag} />
            </div>
            <div className={styles.sideText}>
              <p>드림 코딩 by 엘리</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
