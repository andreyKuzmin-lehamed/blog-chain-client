import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import routerDataReducer from './../plugins/router/state/router.slice';
import MessagesDataReducer from './../features/Messages/state/Messages.slice';
//DO_NOT_DELETE_THIS_STRING__IMPORT

export const store = configureStore({
  reducer: {
    routerData: routerDataReducer,
    MessagesData: MessagesDataReducer,
    //DO_NOT_DELETE_THIS_STRING__REDUCER
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
