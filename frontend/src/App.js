// import logo from './logo.svg';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Landingpage from './screens/Landingpage/Landingpage';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';
function App() {
  return (
  <BrowserRouter>
    <div className="App">
     <Header/>
     <main>
       <Routes>
         <Route path='/' element={<Landingpage/>}/>
         <Route path='/MyNotes' element={<MyNotes/>}/>
       </Routes> 
    {/* <Landingpage?/> */}
     </main>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
