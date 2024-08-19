import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Route,createBrowserRouter,RouterProvider,createRoutesFromElements} from "react-router-dom"
import Allcards from './components/Allcards.jsx'
import Submit from './components/Submit.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Allcards/>}/>
      <Route path='/submit' element={<Submit/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
