import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const initialState = {
  bookList: [],
};

export const fetchBooksFromApi = createAsyncThunk(
  'books/fetchBooksApi',
  async () => {
    const res = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Uw5GopHrgm8vjvUCpewz/books');
    return res.data;
  },
);

export const createNewBook = createAsyncThunk(
  'books/createBook',
  async (data) => {
    const newBook = data;
    newBook.item_id = uuidv4();
    newBook.category = 'Action';
    const res = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Uw5GopHrgm8vjvUCpewz/books', newBook);
    return res.data;
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (data) => {
    const newBook = {};
    newBook.item_id = data;
    newBook.category = 'Action';
    const res = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Uw5GopHrgm8vjvUCpewz/books/${data}`, newBook);
    return res.data;
  },
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchBooksFromApi.fulfilled, (state, { payload }) => {
      const nArray = [];
      Object.keys(payload).forEach((key) => {
        const item = payload[key];
        const nObject = {
          item_id: key,
          author: item[0].author,
          title: item[0].title,
          category: item[0].category,
        };
        nArray.push(nObject);
      });
      return {
        ...state,
        bookList: nArray,
      };
    }).addCase(createNewBook.fulfilled, ({ payload }) => payload)
      .addCase(deleteBook.fulfilled, ({ payload }) => payload);
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
