import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesList: [],
  status: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus(state) {
      return {
        ...state,
        status: state.status === 'Under construction' ? '' : 'Under construction',
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
