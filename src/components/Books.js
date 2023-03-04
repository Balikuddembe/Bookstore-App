import BooksList from './BooksList';
import NewBook from './NewBook';
import styles from '../styles/Books.module.css';

function Books() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
      >
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            boxSizing: 'border-box',
            padding: '4%',
          }}
        >
          <BooksList />
          <div className={styles.horizontalDivider}> </div>
          <NewBook />
        </section>
      </div>
    </>
  );
}

export default Books;
