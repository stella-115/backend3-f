import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { element } from './route/Router'
import { Provider } from 'react-redux'
import { store } from './global/store'
import { ToastContainer } from 'react-toastify'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
   <Provider store={store}>
     <RouterProvider router={element}/>
     <ToastContainer/>
   </Provider>
  </StrictMode>,
)
