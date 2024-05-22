import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CrudService from '../../services/ajax.service';
import { IApp, IResults } from '../../constants/interfaces.constant';

const crudService = new CrudService();

export const fetchFreeApps = createAsyncThunk(
  'global/fetchFreeApps',
  async (_, { rejectWithValue }) => {
    try {
      const response = await crudService.getFreeApps();
      return response;
    } catch (err) {
      console.error(err);
    }
  }
);

export const fetchPaidApps = createAsyncThunk(
  'global/fetchPaidApps',
  async (_, { rejectWithValue }) => {
    try {
      const response = await crudService.getPaidApps();
      return response;
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState = {
  loading: false,
  error: '',
  freeApps: {} as IApp,
  paidApps: {} as IApp,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFreeApps.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFreeApps.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.freeApps = action.payload;
        }
      })
      .addCase(fetchFreeApps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
    builder
      .addCase(fetchPaidApps.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPaidApps.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.paidApps = action.payload;
        }
      })
      .addCase(fetchPaidApps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
