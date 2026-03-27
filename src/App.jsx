import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateCardContext } from './context/CardContext'
import DefaultLayout from './layout/DefaultLayout'
import Main from './pages/Main'


function App() {



  return (
    <>
      <CreateCardContext>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route index element={<Main />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CreateCardContext>
    </>
  )
}

export default App