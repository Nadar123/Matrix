import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import CrudService from '../../services/ajax.service';
// import paidApps from '../../paidApps.json';
// import freeApps from '../../freeApps.json';

interface IApp {
  artistName: string;
  id: string;
  name: string;
  releaseDate: string;
  kind: string;
  artworkUrl100: string;
  genres: string[];
  url: string;
}

interface IAppState {
  id: string;
  name: string;
}

interface IAppsResponse {
  apps: IAppState[];
  totalApps: number;
}

const getAppsService = new CrudService<IApp>();

export const getFreeApps = createAsyncThunk('app/getApps', async () => {
  try {
    const response = await getAppsService.getFreeApps();
    const apps = response.map((app: IApp) => ({
      id: app.id,
      artistName: app.artistName,
      artworkUrl100: app.artworkUrl100,
    }));
    const totalApps = apps.length;
    const data: IAppsResponse = {
      apps: apps,
      totalApps: totalApps,
    };
    return data;
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
});

export const getPaidApps = createAsyncThunk('app/getPaidApps', async () => {
  try {
    const response = await getAppsService.getPaidApps();

    const apps = response.map((app: IApp) => ({
      id: app.id,
      artistName: app.artistName,
      artworkUrl100: app.artworkUrl100,
    }));
    const totalApps = apps.length;
    const data: IAppsResponse = {
      apps: apps,
      totalApps: totalApps,
    };
    return data;
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
});

const initialState = {
  loading: false,
  error: '',
  freeApps: [] as IAppState[],
  totalFreeApps: 0,
  paidApps: [] as IAppState[],
  totalPaidApps: 0,
  darkMode: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFreeApps.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getFreeApps.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.freeApps = payload.apps;
      state.totalFreeApps = payload.totalApps;
    });

    builder.addCase(getFreeApps.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || 'An error occurred';
    });

    builder.addCase(getPaidApps.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getPaidApps.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.paidApps = payload.apps;
      state.totalPaidApps = payload.totalApps;
    });

    builder.addCase(getPaidApps.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || 'An error occurred';
    });
  },
});

export const { toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
