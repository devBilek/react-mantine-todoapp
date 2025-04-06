import { Container } from '@mantine/core';
import { ToDoAppHeader } from '@/features/todoapp/ToDoApphHeader';
import { ToDoAppInput } from '@/features/todoapp/ToDoAppInput';
import { ToDoAppList } from '@/features/todoapp/ToDoAppList';

export const ToDoAppContainer = () => {
  const ToDoAppContainerProps = {
    bg: 'myPalette.5',
    mih: '500px',
    size: 'sm',
    p: 'lg',
    styles: {
      root: {
        borderRadius: '10px',
      },
    },
  };

  return (
    <Container {...ToDoAppContainerProps}>
      <ToDoAppHeader />
      <ToDoAppInput />
      <ToDoAppList />
    </Container>
  );
};
