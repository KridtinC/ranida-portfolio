import { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/footer/Footer';
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter></AppRouter>
      </header>
      <div className="App-footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
