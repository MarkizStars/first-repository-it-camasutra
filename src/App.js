import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Navbar from './componets/Navbar';
import ContentCentr from './componets/ContentCentr';



const App = () => {
   return (
      <div className='app-wrapper' >
        <Header/>
         <Navbar/>
         <ContentCentr/>
      </div>);
}

export default App;
