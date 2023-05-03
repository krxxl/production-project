import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type {
  StateSchema,
  ThunkConfig,
  StateSchemaKey,
  ReduxStoreWithReducerManager,
} from './config/stateSchema';

export type { AppDispatch } from './config/store';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ThunkConfig,
  StateSchemaKey,
  ReduxStoreWithReducerManager,
};
