import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPageComponent from './components/layout/login/loginPageFile.jsx'
import HomeTabComponent from './components/layout/Pages/homeTab/homeTabFile.jsx'
import ProtectedRoute from './components/protectedRoute/protectedRoute.jsx'
import FriendTabComponent from './components/layout/Pages/friendTab/friendTabFile.jsx'


const route = createBrowserRouter([
  {
  path: "/", 
    element: (
          <ProtectedRoute>
            <HomeTabComponent />
          </ProtectedRoute>
        ),
 },
  { 
    path: "/login", 
    element: <LoginPageComponent /> 
  },
 
{
   path: "/friends", 
    element: <FriendTabComponent />
},

{
   path: "/profile", 
    element: <h1>Profile</h1>
},

]);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={route}/>
)
