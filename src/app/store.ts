import { configureStore } from '@reduxjs/toolkit'
import ToDoAppReducer from '@/features/todoapp/ToDoAppSlice'

export const store = configureStore({
    reducer: {
        ToDoApp: ToDoAppReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch