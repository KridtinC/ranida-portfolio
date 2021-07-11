import { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/footer/Footer';
import AOS from 'aos'
import Body from './Body';
import { HashRouter } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <AppRouter></AppRouter>
        </header>
        <body className="App-body">
          <Body></Body>
        </body>
        <div className="App-footer">
          <Footer></Footer>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
