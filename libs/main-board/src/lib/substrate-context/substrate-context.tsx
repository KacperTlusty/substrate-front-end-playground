import { ApiPromise, WsProvider } from '@polkadot/api';
import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import { AnyAction } from '@reduxjs/toolkit';
import React, { Dispatch, useContext, useEffect, useReducer } from 'react';

import {
  connectionActions,
  connectionReducer,
  ConnectionState,
  initialConnectionState,
} from '../state/connection.slice';

const connect = (dispatch: Dispatch<AnyAction>): void => {
  const provider = new WsProvider('ws://127.0.0.1:9944');
  const api = new ApiPromise({ provider, types: {}, rpc: jsonrpc });

  dispatch(connectionActions.connecting());

  api.on('connected', () => {
    dispatch(connectionActions.connected());

    api.isReady.then(() => dispatch(connectionActions.ready()));
  });

  api.on('disconnected', () => dispatch(connectionActions.disconnected()));
  api.on('ready', () => dispatch(connectionActions.ready()));
  api.on('error', (err: Error) =>
    dispatch(connectionActions.error(err.message))
  );
};

export interface SubstrateContextProviderProps {
  readonly socket?: string;
  readonly types?: Record<string, unknown>;
}

const SubstrateContext = React.createContext<ConnectionState>(
  initialConnectionState
);

export const SubstrateContextProvider: React.FC<SubstrateContextProviderProps> =
  ({ socket, types, children }) => {
    const [state, dispatch] = useReducer(
      connectionReducer,
      initialConnectionState
    );

    useEffect(() => {
      connect(dispatch);
    }, []);

    return (
      <SubstrateContext.Provider value={state}>
        {children}
      </SubstrateContext.Provider>
    );
  };

export const useSubstrate = () => ({ ...useContext(SubstrateContext) });
