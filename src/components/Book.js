import { useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchBooksFromApi } from '../redux/books/booksSlice';
import styles from '../styles/Book.module.css';
import 'react-circular-progressbar/dist/styles.css';

function Book({ bookData }) {
  const dispatch = useDispatch();
  const percent = useState(Math.floor(Math.random() * 100));
  return (
    <>
      <article className={styles.article}>
        <div className={styles.mainContent}>
          <h4 className={styles.category}>{bookData.category}</h4>
          <h2 className={styles.bookTitle}>{bookData.title}</h2>
          <h4 className={styles.bookAuthor}>{bookData.author}</h4>
          <ul className={styles.buttonList}>
            <li>
              <button className={styles.btnMenu} type="button">
                Comments
              </button>
            </li>
            <div className={styles.divider}> </div>
            <li>
              <button
                className={styles.btnMenu}
                type="button"
                onClick={async () => {
                  await dispatch(deleteBook(bookData.item_id));
                  await dispatch(fetchBooksFromApi());
                }}
              >
                Remove
              </button>
            </li>
            <div className={styles.divider}> </div>
            <li>
              <button className={styles.btnMenu} type="button">
                Edit
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.allProgress}>
          <div className={styles.percentContainer}>
            <div className={styles.progressBar}>
              <CircularProgressbar
                value={percent[0]}
                strokeWidth={6}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  trailColor: '#e8e8e8',
                })}
              />
            </div>
            <div className={styles.percentTextContainer}>
              <div className={styles.percentText}>
                {percent[0]}
                %
              </div>
              <div className={styles.percentStatus}>Completed</div>
            </div>
          </div>
          <div className={styles.progressDivider}> </div>
          <div className={styles.currentChapterContainer}>
            <div className={styles.chapterLabel}>Current chapter</div>
            <div className={styles.chapter}>Ramdom chapter: This is radom</div>
            <button className={styles.primaryButton} type="button">Update progress</button>
          </div>
        </div>
      </article>
    </>
  );
}

Book.defaultProps = {
  bookData: null,
};

Book.propTypes = {
  bookData: PropTypes.instanceOf(Object),
};

export default Book;
