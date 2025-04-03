import {createSlice, PayloadAction} from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToDoItem {
    text: string,
    date: Date
}
export interface ToDoAppState {
    items: ToDoItem[]
}

const initialState: ToDoAppState = {
    items: []
}

export const ToDoAppSlice = createSlice({
    name: 'ToDoApp',
    initialState,
    reducers: {
        addToDoItem: (state, action: PayloadAction<ToDoItem> ) => {
            state.items.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToDoItem } = ToDoAppSlice.actions

export default ToDoAppSlice.reducer