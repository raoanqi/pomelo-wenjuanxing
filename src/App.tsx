import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import 'antd/dist/reset.css'

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
