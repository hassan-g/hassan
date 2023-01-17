import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import {Content} from './components/index'
import {Header,Footer} from './section/index'
import {Home,Profile,Details,Browser} from './components/Pages/index'
import './App.css'

function App(){
  return(
    <div>
          <Router>
                 <Header/>
                 <Content>
                      <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Profile' element={<Profile/>}/>
                        <Route path='/Details' element={<Details/>}/>
                        <Route path='/Browser' element={<Browser/>}/>
                      </Routes>
                  </Content>
                  <Footer/>
          </Router>
    </div>
  )
}
export default App