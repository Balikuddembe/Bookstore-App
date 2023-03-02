import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import styles from '../styles/BooksList.module.css';
import { fetchBooksFromApi } from '../redux/books/booksSlice';

function BooksList() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(fetchBooksFromApi());
  }, []);

  return (
    <ul className={styles.bookList}>
      {
        bookList.map((item) => (
          <Book
            key={item.item_id}
            bookData={item}
          />
        ))
      }
    </ul>
  );
}

export default BooksList;
