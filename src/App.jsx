import './App.css'
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';

function App() {
    return (
        <div className='container'>
            <Header />
            <Hero />
            <About />
            <Reviews />
        </div>
    );
}

export default App
