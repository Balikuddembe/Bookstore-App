import BooksList from './BooksList';
import NewBook from './NewBook';

function Books() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <BooksList />
          <NewBook />
        </section>
      </div>
    </>
  );
}

export default Books;
