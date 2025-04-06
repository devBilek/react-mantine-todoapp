import {createSlice, PayloadAction} from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToDoItem {
    id: string,
    text: string,
    date: string
}
export interface ToDoAppState {
    items: ToDoItem[]
}

const initialState: ToDoAppState = {
    items: []
}
const sortItemsByDate = (a: ToDoItem, b: ToDoItem): number => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
}

export const ToDoAppSlice = createSlice({
    name: 'ToDoApp',
    initialState,
    reducers: {
        addToDoItem: {
            prepare: (item: {id: string, text: string, date:Date}) => {
                return {
                    payload: {
                        id: Date.now().toString(),
                        text: item.text,
                        date: item.date.toISOString()
                    }
                }
            },
            reducer:(state, action: PayloadAction<ToDoItem>) => {
                state.items.push(action.payload)
                state.items.sort(sortItemsByDate);
            }
        },
        deleteToDoItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToDoItem, deleteToDoItem } = ToDoAppSlice.actions

export default ToDoAppSlice.reducer
