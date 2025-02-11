import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPageComponent from './components/layout/login/loginPageFile.jsx'
import HomeTabComponent from './components/layout/Pages/homeTab/homeTabFile.jsx'


const route = createBrowserRouter([
    {path:"/", element: <HomeTabComponent />},
    {path:"/login", element: <LoginPageComponent />},
    {path:"/home", element: <HomeTabComponent />},
]) 
 


createRoot(document.getElementById('root')).render(
    <RouterProvider router={route}/>
)
