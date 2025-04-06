import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
], {
  basename: '/react-mantine-todoapp/',
});

export function Router() {
  return <RouterProvider router={router} />;
}
