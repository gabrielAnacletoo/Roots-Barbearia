import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { StarterMenu } from '../components/menu/menu'
import ServiceList from '../components/services/services'

// PAGES
const router = createBrowserRouter([
  {
    path: '/',
    element: <StarterMenu />
  },
  {
    path: '/services',
    element: <ServiceList />
  }
])

export default function Router() {
  
  return (
  
        <RouterProvider router={router} />
   
  )
}