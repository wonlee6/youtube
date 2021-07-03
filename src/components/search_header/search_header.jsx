import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';
import {
  faSearch,
  faMicrophone,
  faVideo,
  faTh,
  faBell,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// memo props 가 바뀌면 렌더링 됨
const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src='/images/logo.png' alt='logo' />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <div className={styles.center}>
        <input
          ref={inputRef}
          className={styles.input}
          type='search'
          placeholder='Search...'
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} type='submit' onClick={onClick}>
          <FontAwesomeIcon icon={faSearch} className={styles.buttonImg} />
        </button>
        <div className={styles.micDiv}>
          <FontAwesomeIcon icon={faMicrophone} className={styles.micro} />
        </div>
      </div>
      <div className={styles.icons}>
        <p>
          <FontAwesomeIcon icon={faVideo} className={styles.video} />
        </p>
        <p>
          <FontAwesomeIcon icon={faTh} className={styles.th} />
        </p>
        <p>
          <FontAwesomeIcon icon={faBell} className={styles.bell} />
        </p>
        <p>
          <FontAwesomeIcon icon={faUserCircle} className={styles.bell} />
        </p>
      </div>
    </header>
  );
});

export default SearchHeader;
