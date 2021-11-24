import {
  fetchConnection,
  connectionAdapter,
  connectionReducer,
} from './connection.slice';

describe('connection reducer', () => {
  it('should handle initial state', () => {
    const expected = connectionAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(connectionReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchConnections', () => {
    let state = connectionReducer(
      undefined,
      fetchConnection.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = connectionReducer(
      state,
      fetchConnection.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = connectionReducer(
      state,
      fetchConnection.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
