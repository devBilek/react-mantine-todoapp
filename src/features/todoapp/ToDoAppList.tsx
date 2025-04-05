import {Container, List, ListItem, Text, Flex, ActionIcon} from '@mantine/core'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from "@/app/store";
import { ImCross } from "react-icons/im";
import {deleteToDoItem} from './ToDoAppSlice'

export const ToDoAppList = () => {
    const ToDoAppList = useSelector((state: RootState) => state.ToDoApp.items)
    const dispatch = useDispatch();

    const handleDeleteToDoItem = (id: string) => {
        dispatch(deleteToDoItem(id))
    }

    const ToDoAppListProps = {
        bg: 'myPalette.4',
        mt: 'sm',
        mih: '300px',
        styles: {
            root: {
                borderRadius: 10,
            }
        }

    }
    return (
        <Container {...ToDoAppListProps}>
            <List
                listStyleType='none'
                py='sm'
            >
                {ToDoAppList.map((item) => (
                    <ListItem
                        key={item.id}
                        bg='myPalette.6'
                        m='sm'
                        mx={0}
                        p='xs'
                        styles={{
                            item: {
                                borderRadius: 10,
                                width: '100%',
                            },
                            itemWrapper: {
                                width: '100%',
                            },
                            itemLabel: {
                                width: '100%',
                            }
                        }}
                    >
                        <Flex w='100%'>
                            <Flex direction='column' w='90%'>
                                <Text
                                    size='xl'
                                >
                                    {item.date.getDate()}.{item.date.getMonth() + 1}.{item.date.getFullYear()}
                                </Text>
                                <Text
                                    size='lg'
                                >
                                    {item.text}
                                </Text>
                            </Flex>
                            <Flex w='10%'>
                                <ActionIcon
                                    onClick={() => handleDeleteToDoItem(item.id)}
                                    variant='ghost'
                                    w='100%'
                                    h='100%'
                                >
                                    <ImCross/>
                                </ActionIcon>
                            </Flex>

                        </Flex>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}