import {Container, List, ListItem, Text, Center} from '@mantine/core'
import {useSelector} from 'react-redux'
import {RootState} from "@/app/store";

export const ToDoAppList = () => {
    const ToDoAppList = useSelector((state: RootState) => state.ToDoApp.items)

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
            <List py='sm' listStyleType='none'>
                {ToDoAppList.map((item) => (
                    <ListItem
                        key={item.id}
                        bg='myPalette.2'
                        m='sm'
                        p='xs'
                        styles={{
                            item: {
                                borderRadius: 10,
                            }
                        }}
                    >
                        <Center>
                            <Text
                                size='xl'
                            >{item.date.getDate()}.{item.date.getMonth() + 1}.{item.date.getFullYear()}
                            </Text>
                        </Center>
                        <Text
                            size='lg'
                        >{item.text}</Text>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}