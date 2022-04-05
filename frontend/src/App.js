// import logo from './logo.svg';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Landingpage from './screens/Landingpage/Landingpage';

function App() {
  return (
    <div className="App">
     <Header/>
    <Landingpage/>
     <Footer/>
    </div>
  );
}

export default App;
