import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import initialStateBooks from '../../components/initialStateBooks';

const initialState = {
  bookList: initialStateBooks,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.bookList.push({
        title: action.payload.title,
        author: action.payload.author,
        item_id: uuidv4(),
      });
    },
    remove(state, action) {
      return {
        ...state,
        bookList: state.bookList.filter(
          (books) => books.item_id !== action.payload.bookData.item_id,
        ),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
