import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const CONNECTION_FEATURE_KEY = 'connection';

export interface ConnectionState {
  loadingStatus:
    | 'connecting'
    | 'connected'
    | 'connect error'
    | 'starting to connect'
    | 'disconnected';
  error: string;
  isReady: boolean;
}

export const initialConnectionState: ConnectionState = {
  loadingStatus: 'starting to connect',
  error: '',
  isReady: false,
};

export const connectionSlice = createSlice({
  name: CONNECTION_FEATURE_KEY,
  initialState: initialConnectionState,
  reducers: {
    connecting: (state) => ({
      ...state,
      loadingStatus: 'connecting',
    }),
    connected: (state) => ({
      ...state,
      loadingStatus: 'connected',
    }),
    disconnected: (state) => ({
      ...state,
      loadingStatus: 'disconnected',
      isReady: false,
    }),
    ready: (state) => ({
      ...state,
      isReady: true,
    }),
    error: (state, { payload }: PayloadAction<string>) => ({
      isReady: false,
      loadingStatus: 'connect error',
      error: payload,
    }),
  },
});

export const connectionReducer = connectionSlice.reducer;

export const connectionActions = connectionSlice.actions;
