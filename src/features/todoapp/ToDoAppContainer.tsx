import {Container} from '@mantine/core'
import {ToDoApphHeader} from "@/features/todoapp/ToDoApphHeader";
import {ToDoAppInput} from "@/features/todoapp/ToDoAppInput";

export const ToDoAppContainer = () => {
    const ToDoAppContainerProps = {
        bg: 'blue.4',
        h: '500px',
        size: 'sm',
        p: 'lg',
        styles: {
            root: {
                borderRadius: '10px',
            }
        }
    }

    return (
        <Container {...ToDoAppContainerProps}>
            <ToDoApphHeader/>
            <ToDoAppInput/>
        </Container>
    )
}