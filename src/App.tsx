import { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/footer/Footer';
import AOS from 'aos'
import Body from './Body';
import { HashRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID!!);
  }, []);
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <AppRouter></AppRouter>
        </header>
        <div className="App-body">
          <Body></Body>
        </div>
        <div className="App-footer">
          <Footer backgroundColor={"#FFFFFF"}></Footer>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
