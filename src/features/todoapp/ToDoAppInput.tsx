import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addToDoItem} from "@/features/todoapp/ToDoAppSlice";
import {Group, Input, Button} from '@mantine/core'
import {DatePickerInput, DateValue} from '@mantine/dates'
import { FaCalendarAlt } from "react-icons/fa";

export const ToDoAppInput = () => {
    const [taskText, setTaskText] = useState<string>('')
    const [selectedDate, setSelectedDate] = useState<DateValue>(new Date())
    const dispatch = useDispatch()

    const handleAddToDoItem = () => {
        if (taskText.trim() && selectedDate) {
            dispatch(addToDoItem({
                id: Date.now().toString(),
                text: taskText,
                date: selectedDate
            }));
        }
        setTaskText('')
        setSelectedDate(new Date())
    }

    const ToDoAppInputProps = {
        bg: 'myPalette.4',
        p: 'sm',
        justify: 'center',
        align: 'flex-end',
        gap: 'xs',
        styles: {
            root: {
                borderRadius: 10
            }
        }
    }
    return (
        <Group {...ToDoAppInputProps}>
            <Input
                placeholder='task'
                w={300}
                radius='lg'
                value={taskText}
                onChange={(e) => {setTaskText(e.target.value)}}
                onKeyDown={(e) => e.key === 'Enter' && handleAddToDoItem()}
            />
            <DatePickerInput
                leftSection={<FaCalendarAlt />}
                leftSectionPointerEvents='none'
                placeholder='date'
                w={140}
                radius='lg'
                minDate={new Date()}
                value={selectedDate}
                onChange={setSelectedDate}
            />
            <Button radius='lg' onClick={handleAddToDoItem} disabled={taskText.trim() === ''} >add</Button>
        </Group>
    )
}