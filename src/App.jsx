import './App.css'
import Header from './components/Header.jsx'
import RouterConfig from './RouterConfig.jsx'
import Loading from './components/Loading.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <RouterConfig />
        <Loading />
      </BrowserRouter>
    </div>
  )
}

export default App
