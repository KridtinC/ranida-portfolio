import { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/footer/Footer';
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
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
