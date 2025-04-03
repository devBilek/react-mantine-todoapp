import { Box } from '@mantine/core'
import {ToDoAppContainer} from "@/features/todoapp/ToDoAppContainer";

export const Main = () => {
    return (
        <Box py='xl'>
            <ToDoAppContainer/>
        </Box>
    )
}