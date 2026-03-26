import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import Main from './pages/Main'
import { CreateCardContext } from './context/CardContext'


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