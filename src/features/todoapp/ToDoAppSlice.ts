import {createSlice, PayloadAction} from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToDoItem {
    id: string,
    text: string,
    date: Date
}
export interface ToDoAppState {
    items: ToDoItem[]
}

const initialState: ToDoAppState = {
    items: []
}
const sortItemsByDate = (a: ToDoItem, b: ToDoItem): number => {
    return a.date.getTime() - b.date.getTime()
}

export const ToDoAppSlice = createSlice({
    name: 'ToDoApp',
    initialState,
    reducers: {
        addToDoItem: (state, action: PayloadAction<ToDoItem> ) => {
            state.items.push(action.payload)
            state.items.sort(sortItemsByDate)
        },
        deleteToDoItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToDoItem, deleteToDoItem } = ToDoAppSlice.actions

export default ToDoAppSlice.reducer