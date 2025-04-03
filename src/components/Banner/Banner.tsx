import {Box, Center, Title } from '@mantine/core'

export const Banner = () => {
    return (
        <Box bg='blue.7' w='100%' h={80}>
            <Center h='100%'>
                <Title order={1} >ToDoApp by devBilek</Title>
            </Center>
        </Box>
    )
}