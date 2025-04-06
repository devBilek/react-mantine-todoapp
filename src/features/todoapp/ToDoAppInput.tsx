import { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Button, Flex, Group, Input } from '@mantine/core';
import { DatePickerInput, DateValue } from '@mantine/dates';
import { addToDoItem } from "@/features/todoapp/ToDoAppSlice";


export const ToDoAppInput = () => {
    const [taskText, setTaskText] = useState<string>('')
    const [selectedDate, setSelectedDate] = useState<DateValue>(new Date())
    const dispatch = useDispatch()

    const handleAddToDoItem = () => {
        if (taskText.trim() && selectedDate) {
            dispatch(
              addToDoItem({
                  id: '',
                text: taskText,
                date: selectedDate,
              })
            );
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
            <Flex wrap='nowrap' gap='xs'>
                <DatePickerInput
                    leftSection={<FaCalendarAlt />}
                    leftSectionPointerEvents='none'
                    placeholder='date'
                    w={180}
                    radius='lg'
                    minDate={new Date()}
                    value={selectedDate}
                    onChange={setSelectedDate}
                />
                <Button radius='lg' onClick={handleAddToDoItem} disabled={taskText.trim() === ''} >add</Button>
            </Flex>
        </Group>
    )
}