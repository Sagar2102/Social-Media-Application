import Home from './components/Home.jsx'
import MainLayout from './components/MainLayout.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './components/Profile.jsx'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element:  <Profile />
      },
      // {
      //   path: '/account/edit',
      //   element: <EditProfile />
      // },
      // {
      //   path: '/chat',
      //   element: <ChatPage />
      // },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
])


function App() {

  return (
    <>
      <RouterProvider router={browserRouter} />
      
    </>
  )
}

export default App
