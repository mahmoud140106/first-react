import './App.css';
import './components/mediaquery.css';
import Header from './components/header';
import Home from './components/home';
import Single from './components/singleproduct';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App"  >
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/singleproduct/:id' element={<Single/>}></Route>
        <Route path='*' element={<h1 className='notfound'>page not found</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
