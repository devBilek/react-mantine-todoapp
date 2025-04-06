import { AnimatePresence, motion } from 'framer-motion';
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { ActionIcon, Container, Flex, List, ListItem, Text } from '@mantine/core';
import { RootState } from '@/app/store';
import { deleteToDoItem } from './ToDoAppSlice';

export const ToDoAppList = () => {
  const ToDoAppList = useSelector((state: RootState) => state.ToDoApp.items);
  const dispatch = useDispatch();

  const handleDeleteToDoItem = (id: string) => {
    dispatch(deleteToDoItem(id));
  };

  const ToDoAppListProps = {
    bg: 'myPalette.4',
    mt: 'sm',
    mih: '300px',
    styles: {
      root: {
        borderRadius: 10,
      },
    },
  };
  return (
    <Container {...ToDoAppListProps}>
      <List listStyleType="none" py="sm">
        <AnimatePresence>
          {ToDoAppList.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <ListItem
                bg="myPalette.6"
                m="sm"
                mx={0}
                p="xs"
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
                  },
                }}
              >
                <Flex w="100%">
                  <Flex direction="column" w="90%">
                    <Text size="xl">
                      {new Date(item.date).getDate()}.{new Date(item.date).getMonth() + 1}.
                      {new Date(item.date).getFullYear()}
                    </Text>
                    <Text size="lg">{item.text}</Text>
                  </Flex>
                  <Flex w="10%">
                    <ActionIcon
                      onClick={() => handleDeleteToDoItem(item.id)}
                      variant="ghost"
                      w="100%"
                      h="100%"
                    >
                      <ImCross />
                    </ActionIcon>
                  </Flex>
                </Flex>
              </ListItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </List>
    </Container>
  );
};
