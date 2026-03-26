import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import Main from './pages/Main'

function App() {



  


   return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App